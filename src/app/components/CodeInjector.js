'use client';
import { useEffect } from 'react';

export default function CodeInjector({ pageUrl }) {
  useEffect(() => {
    async function injectCodes() {
      try {
        const res = await fetch('/api/code', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageUrl })
        });

        const data = await res.json();
        if (!data.injections) return;

        data.injections.forEach(injection => {
          const code = injection.code.trim();
          const position = injection.position || 'beforeend';
          const parent =
            injection.type === 'header' ? document.head : document.body;

          // Detect <script> tag
          if (code.startsWith('<script')) {
            const temp = document.createElement('div');
            temp.innerHTML = code;
            const scriptTag = temp.querySelector('script');

            if (scriptTag) {
              const script = document.createElement('script');
              if (scriptTag.src) script.src = scriptTag.src;
              if (scriptTag.type) script.type = scriptTag.type;
              script.textContent = scriptTag.innerHTML;
              script.async = false;

              parent.insertAdjacentElement(position, script);
            }

          // Detect <link> tag
          } else if (code.startsWith('<link')) {
            const temp = document.createElement('div');
            temp.innerHTML = code;
            const linkTag = temp.querySelector('link');

            if (linkTag) {
              const link = document.createElement('link');
              if (linkTag.href) link.href = linkTag.href;
              if (linkTag.rel) link.rel = linkTag.rel;
              if (linkTag.type) link.type = linkTag.type;

              parent.insertAdjacentElement(position, link);
            }

          // Treat as raw HTML
          } else {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = code;

            // Insert all child nodes individually to respect position
            Array.from(wrapper.childNodes).forEach(node => {
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
