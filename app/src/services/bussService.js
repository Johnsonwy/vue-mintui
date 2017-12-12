export const bussService = {
    getTotalTrade: function (trade) {
        if (!trade) {
            return 0;
        } else {
            return (trade.currPercent.assetValue || trade.wfCurrPercent || trade.wfPercent);
        }
    }
}