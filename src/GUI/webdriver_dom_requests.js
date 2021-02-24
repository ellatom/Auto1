import setInit from './init.js';

const getTotalCases = async (xpath) => {
    let totalCases = await setInit().findElementByXPath(xpath);
    return Number(totalCases);
}

export default function guiUtils() {
    return {
        getTotalCases,
    };
}