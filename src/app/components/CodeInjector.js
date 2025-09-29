'use client';
import { useEffect } from 'react';

export default function CodeInjector({ pageUrl }) {
  useEffect(() => {
    async function injectCodes() {
      try {
        const res = await fetch('/api/code', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageUrl }),
        });

        const data = await res.json();
        if (!data.injections) return;

        data.injections.forEach((injection) => {
          const code = injection.code.trim();
          const position = injection.position || 'beforeend';
          const parent =
            injection.type === 'header' ? document.head : document.body;

          const temp = document.createElement('div');
          temp.innerHTML = code;

          // Handle <script>
          if (code.startsWith('<script')) {
            const scriptTag = temp.querySelector('script');
            if (scriptTag) {
              const script = document.createElement('script');
              if (scriptTag.src) script.src = scriptTag.src;
              if (scriptTag.type) script.type = scriptTag.type;
              if (scriptTag.async) script.async = scriptTag.async;
              if (scriptTag.defer) script.defer = scriptTag.defer;
              script.textContent = scriptTag.innerHTML;
              parent.insertAdjacentElement(position, script);
            }

          // Handle <link>
          } else if (code.startsWith('<link')) {
            const linkTag = temp.querySelector('link');
            if (linkTag) {
              const link = document.createElement('link');
              if (linkTag.href) link.href = linkTag.href;
              if (linkTag.rel) link.rel = linkTag.rel;
              if (linkTag.type) link.type = linkTag.type;
              if (linkTag.media) link.media = linkTag.media;
              parent.insertAdjacentElement(position, link);
            }

          // Handle <meta>
          } else if (code.startsWith('<meta')) {
            const metaTag = temp.querySelector('meta');
            if (metaTag) {
              const meta = document.createElement('meta');
              Array.from(metaTag.attributes).forEach((attr) =>
                meta.setAttribute(attr.name, attr.value)
              );
              parent.insertAdjacentElement(position, meta);
            }

          // Handle <style>
          } else if (code.startsWith('<style')) {
            const styleTag = temp.querySelector('style');
            if (styleTag) {
              const style = document.createElement('style');
              style.textContent = styleTag.innerHTML;
              parent.insertAdjacentElement(position, style);
            }

          // Handle <noscript>
          } else if (code.startsWith('<noscript')) {
            const noscriptTag = temp.querySelector('noscript');
            if (noscriptTag) {
              const noscript = document.createElement('noscript');
              noscript.innerHTML = noscriptTag.innerHTML;
              parent.insertAdjacentElement(position, noscript);
            }

          // Fallback: raw HTML injection
          } else {
            Array.from(temp.childNodes).forEach((node) => {
              parent.insertAdjacentElement(position, node);
            });
          }
        });
      } catch (err) {
        console.error('Error injecting codes:', err);
      }
    }

    injectCodes();
  }, [pageUrl]);

  return null;
}
