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
          const parent =
            injection.type === 'header' ? document.head : document.body;

          const temp = document.createElement('div');
          temp.innerHTML = code;

          // Handle <script>
          const scriptTag = temp.querySelector('script');
          if (scriptTag) {
            // Deduplicate by src or innerHTML
            const exists = scriptTag.src
              ? parent.querySelector(`script[src="${scriptTag.src}"]`)
              : parent.querySelector(
                  `script[data-hash="${btoa(scriptTag.innerHTML)}"]`
                );

            if (!exists) {
              const script = document.createElement('script');
              if (scriptTag.src) script.src = scriptTag.src;
              if (scriptTag.type) script.type = scriptTag.type;
              if (scriptTag.async) script.async = scriptTag.async;
              if (scriptTag.defer) script.defer = scriptTag.defer;
              if (!scriptTag.src) {
                // hash raw inline script to avoid duplicates
                script.dataset.hash = btoa(scriptTag.innerHTML);
                script.textContent = scriptTag.innerHTML;
              }
              parent.appendChild(script);
            }
            return;
          }

          // Handle <link>
          const linkTag = temp.querySelector('link');
          if (linkTag) {
            if (!parent.querySelector(`link[href="${linkTag.href}"]`)) {
              parent.appendChild(linkTag.cloneNode(true));
            }
            return;
          }

          // Handle <meta>
          const metaTag = temp.querySelector('meta');
          if (metaTag) {
            const name = metaTag.getAttribute('name');
            const property = metaTag.getAttribute('property');
            if (
              !parent.querySelector(
                `meta[name="${name}"], meta[property="${property}"]`
              )
            ) {
              parent.appendChild(metaTag.cloneNode(true));
            }
            return;
          }

          // Handle <style>
          const styleTag = temp.querySelector('style');
          if (styleTag) {
            const hash = btoa(styleTag.innerHTML);
            if (!parent.querySelector(`style[data-hash="${hash}"]`)) {
              const style = document.createElement('style');
              style.dataset.hash = hash;
              style.textContent = styleTag.innerHTML;
              parent.appendChild(style);
            }
            return;
          }

          // Handle <noscript>
          const noscriptTag = temp.querySelector('noscript');
          if (noscriptTag) {
            const hash = btoa(noscriptTag.innerHTML);
            if (!parent.querySelector(`noscript[data-hash="${hash}"]`)) {
              const noscript = document.createElement('noscript');
              noscript.dataset.hash = hash;
              noscript.innerHTML = noscriptTag.innerHTML;
              parent.appendChild(noscript);
            }
            return;
          }

          // Fallback: raw HTML nodes
          Array.from(temp.childNodes).forEach((node) => {
            if (node.nodeType === 1) {
              // For elements, check duplicates via outerHTML hash
              const hash = btoa(node.outerHTML);
              if (!parent.querySelector(`[data-hash="${hash}"]`)) {
                const cloned = node.cloneNode(true);
                cloned.dataset.hash = hash;
                parent.appendChild(cloned);
              }
            }
          });
        });
      } catch (err) {
        console.error('Error injecting codes:', err);
      }
    }

    injectCodes();
  }, [pageUrl]);

  return null;
}