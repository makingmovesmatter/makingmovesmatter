import { connectDB } from "../../../../lib/db";
import Settings from "../../../../models/codes";

export async function GET() {
  await connectDB();
  const settings = await Settings.findOne();
  return Response.json(settings || {});
}

export async function POST(req) {
  await connectDB();
  const { codeInjections = [], modes = {}, injectionSettings = {} } = await req.json();

  let settings = await Settings.findOne();

  if (!settings) {
    settings = await Settings.create({
      codeInjections,
      modes: {
        darkMode: modes.darkMode || false,
        maintenanceMode: modes.maintenanceMode || false,
        debugMode: modes.debugMode || false,
        customModes: new Map(Object.entries(modes.customModes || {}))
      },
      injectionSettings: {
        globalEnabled: injectionSettings.globalEnabled !== false,
        defaultPosition: injectionSettings.defaultPosition || 'beforeend'
      }
    });
  } else {
    // Ensure modes and injectionSettings exist
    settings.modes = settings.modes || {};
    settings.injectionSettings = settings.injectionSettings || {};

    // Update code injections
    settings.codeInjections = codeInjections.map(ci => ({
      name: ci.name,
      code: ci.code,
      type: ci.type || 'header',
      position: ci.position || 'beforeend',
      enabled: ci.enabled !== undefined ? ci.enabled : true,
      targetPages: ci.targetPages || 'all',
      pagesList: ci.pagesList || [],
      createdAt: ci.createdAt || new Date()
    }));

    // Sanitize customModes from client (ensure plain object)
    const sanitizedCustomModes = {};
    if (modes.customModes && typeof modes.customModes === 'object') {
      Object.entries(modes.customModes).forEach(([k, v]) => {
        sanitizedCustomModes[k] = v;
      });
    }

    // Update modes
    settings.modes.darkMode = modes.darkMode ?? settings.modes.darkMode ?? false;
    settings.modes.maintenanceMode = modes.maintenanceMode ?? settings.modes.maintenanceMode ?? false;
    settings.modes.debugMode = modes.debugMode ?? settings.modes.debugMode ?? false;

    // Merge customModes correctly as a Map
    const existingCustomModes = settings.modes.customModes instanceof Map
      ? settings.modes.customModes
      : new Map(Object.entries(settings.modes.customModes || {}));

    const mergedCustomModes = new Map([
      ...existingCustomModes.entries(),
      ...Object.entries(sanitizedCustomModes)
    ]);

    settings.modes.customModes = mergedCustomModes;

    // Update injection settings
    settings.injectionSettings.globalEnabled = injectionSettings.globalEnabled ?? settings.injectionSettings.globalEnabled ?? true;
    settings.injectionSettings.defaultPosition = injectionSettings.defaultPosition || settings.injectionSettings.defaultPosition || 'beforeend';

    await settings.save();
  }

  return Response.json({ success: true, settings });
}

export async function PUT(req) {
  await connectDB();
  const { pageUrl } = await req.json();
  const settings = await Settings.findOne();

  if (!settings) return Response.json({ injections: [] });

  const filteredInjections = settings.codeInjections.filter(injection => {
    if (!injection.enabled) return false;
    return shouldInjectOnPage(pageUrl, injection.targetPages, injection.pagesList);
  });

  return Response.json({
    injections: filteredInjections,
    modes: settings.modes,
    injectionSettings: settings.injectionSettings
  });
}

function shouldInjectOnPage(pageUrl, targetPages, pagesList) {
  if (targetPages === 'all') return true;

  const url = new URL(pageUrl, 'https://mesamovingexperts.com');
  const path = url.pathname;

  if (targetPages === 'specific') {
    return pagesList.some(page => path === page || path.startsWith(page));
  } else if (targetPages === 'exclude') {
    return !pagesList.some(page => path === page || path.startsWith(page));
  }

  return true;
}
