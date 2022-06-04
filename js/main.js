function getPageLinkDomain() {
    return Array.from(document.getElementsByTagName('a'))
        .map(link => link.href
            .replace('http://', '')
            .replace('https:/', '')
            .replace('www.', '')
            .split('/')
            .shift()
        )
        .reduce((unicDomain,domain) => {
            if (unicDomain.includes(domain)) return unicDomain;
            return [...unicDomain,domain]
        },[])
}