const KenticoCloud = require('kentico-cloud-delivery-typescript-sdk');
const NodeLib = require('../../../dist');

const config = new KenticoCloud.DeliveryClientConfig("e391c776-9d1e-4e1a-8a5a-1c327c2586b6", []);

const deliveryClient = new NodeLib.DeliveryNodeClient(config);

deliveryClient.types()
    .limitParameter(3)
    .get()
    .subscribe(response => console.log(response.types));
