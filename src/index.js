export const install = (wid) => {
    window.__insp = window.__insp || [];
    insp(['wid', wid]);
    setTimeout(() => {
        if (typeof window.__inspld != "undefined") return;
        window.__inspld = 1;
        const insp = document.createElement('script');
        insp.type = 'text/javascript';
        insp.async = true; 
        insp.id = "inspsync";
        insp.src = `${ 'https:' == document.location.protocol ? 'https' : 'http' }://cdn.inspectlet.com/inspectlet.js?wid=${ wid }&r=${ Math.floor(new Date().getTime() / 3600000) }`;
        const x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(insp, x);
    }, 0);
};

export const insp = (...args) => window.__insp.push(...args);

export default insp;