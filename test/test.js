import 'mocha';
import { expect } from 'chai';
import utilsAPIData from '../src/API/api_requests.js';
import utilsGUIData from '../src/GUI/webdriver_dom_requests.js';
import setInit from '../src/GUI/init.js';
import { totalConfirmedCases, totalDeathsCases } from '../src/GUI/config.js';

describe('Compare gui total cases per type to api/db cases', async () => {
    before(async () => {
        await setInit().navigateToBasicUrl();
        await setInit().waitUntilElementLocatedByClass();
    })
    after(async () => {
        setInit().driverQuit(setInit().getDriver());
    })

    it('should be identical- total confirmed cases in gui to db/api', async () => {
        const guiResult = await utilsAPIData().getTotalCases("latest_data", "confirmed");
        const apiResult = await utilsGUIData().getTotalCases(totalConfirmedCases);

        expect(guiResult).to.eq(apiResult);
        // console.log(typeof guiResult);
        // console.log(typeof apiResult);
    })
    it('should be identical- total deaths cases in gui to db/api', async () => {
        const guiResult = await utilsAPIData().getTotalCases("latest_data", "deaths");
        const apiResult = await utilsGUIData().getTotalCases(totalDeathsCases);

        expect(guiResult).to.eq(apiResult);
    })
})