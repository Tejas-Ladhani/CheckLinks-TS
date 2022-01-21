# Task
We have a dapp: sub.id . There are many connections to different blockchain networks and in order to always be aware of which ones work, we would like the page with the status of connections.

Each connection to the network should be represented as a green or red rectangle
green - connected
red - disconnected

To do this, you need to pull out all the chains along this path:

https://app.subsocial.network/subid/api/v1/chains/properties

Sort all networks that have tokenSymbol and tokenDecimal. And display them on the screen with a tile, with a name and an icon.

The icon can be reached along the following path:
https://sub.id/images/:icon

For example:
https://sub.id/images/bifrost.svg

And check the status of the connection every 5 minutes along this path:
https://app.subsocial.network/subid/api/v1/check/:network

For example:
https://app.subsocial.network/subid/api/v1/check/kusama