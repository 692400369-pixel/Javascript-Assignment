function processOrders(orders) {

    let totalRevenue = 0;

    let successfulOrders = 0;

    let processedOrders = 0;

    let skipped = 0;

    let stockFail = 0;

    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {

        if (orders[i].status == "valid" && orders[i].stockAvailable == true) {

            totalRevenue += orders[i].amount;

            successfulOrders++;

            processedOrders++;

            skipped = 0;

        } else {

            skipped++;

            if (orders[i].stockAvailable == false) {

                stockFail++;

            }

            if (skipped == 3 || stockFail == 3) {

                stopMessage = "System stopped due to critical condition.";

                break;

            }

        }

    }

    return {

        totalRevenue: totalRevenue,

        successfulOrders: successfulOrders,

        processedOrders: processedOrders,

        stopMessage: stopMessage

    };

}