const {deterministicPartitionKey} = require("./dpk");

// console.log(deterministicPartitionKey());


console.log({
    "id": "7676a4bf-adfe-415c-941b-1739af07039b",
    "name": "Ordinary Coral Lynx",
    "teamLeadId": "b12fa35a-9c4c-4bf9-8f32-27cf03a1f190",
    "teamMemberIds": [
        "371d2ee8-cdf4-48cf-9ddb-04798b79ad9e",
        "54383a18-425c-4f50-9424-1c4c27e776dd",
        "e0dba3dc-313d-4648-bd9c-4ddc8b189e84",
        "b047d3f4-3469-47ce-a03f-1637a6de036b",
        "ee91a519-fefa-48a7-bdf7-672bde38aef9",
        "197c2b23-1218-44d0-b6b8-d757ba004515",
        "e947058e-2d5f-47d9-925b-27bcab14c38e"
    ]
});

console.log(deterministicPartitionKey({
    "id": "7676a4bf-adfe-415c-941b-1739af07039b",
    "name": "Ordinary Coral Lynx",
    "teamLeadId": "b12fa35a-9c4c-4bf9-8f32-27cf03a1f190",
    "teamMemberIds": [
        "371d2ee8-cdf4-48cf-9ddb-04798b79ad9e",
        "54383a18-425c-4f50-9424-1c4c27e776dd",
        "e0dba3dc-313d-4648-bd9c-4ddc8b189e84",
        "b047d3f4-3469-47ce-a03f-1637a6de036b",
        "ee91a519-fefa-48a7-bdf7-672bde38aef9",
        "197c2b23-1218-44d0-b6b8-d757ba004515",
        "e947058e-2d5f-47d9-925b-27bcab14c38e"
    ]
}));


console.log(deterministicPartitionKey());