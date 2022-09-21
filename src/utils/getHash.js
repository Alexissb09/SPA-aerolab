const getHash = () => window.location.hash.substring(1) || "/";

export default getHash;
