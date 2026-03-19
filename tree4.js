// outboundOrderList.
// signoffOrderList.
// returnOrderList.
// returninboundOrderList.
// returnConfirmOrderList.
// invoiceList，
const fakeList = [
  {
    id: 3571,
    deliveryNoticeOrderList: [
      {
        orderNo: "DO-S1111260200053",
        id: 3529,
        outboundOrderList: [
          {
            id: 1251,
            code: "OO-S1121260200020",
            signoffOrderList: [
              {
                id: 821,
                code: "POD-S1121260200005",
                returnOrderList: [
                  {
                    orderNo: "SRO-S1111260200004",
                    id: 1177,
                    returnInboundOrderList: [
                      {
                        orderNo: "asdfasfasf",
                        id: Math.random(),
                        returnConfirmOrderList: [
                          {
                            orderNo: "asdfasdfasf",
                            id: Math.random(),
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "invoiceNo",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    orderNo: "SRO-S1111260200031",
                    id: 1245,
                    returnInboundOrderList: [
                      {
                        orderNo: "orderNo",
                        id: Math.random(),
                        returnConfirmOrderList: [
                          {
                            orderNo: "orderNo",
                            id: Math.random(),
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "dadsf",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    orderNo: "SRO-S1111260200032",
                    id: 1246,
                    returnInboundOrderList: [
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 719,
                            invoiceList: [
                              {
                                id: Math.random(),
                              },
                            ],
                          },
                        ],
                      },
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 719,
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "invoiceNo",
                              },
                              // {
                              //   id: Math.random(),
                              //   invoiceNo: "invoiceNo222",
                              // },
                            ],
                          },
                        ],
                      },
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 7191,
                            invoiceList: [
                              {
                                id: Math.random(),
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   orderNo: "DO-S1111260200053",
      //   id: 3528,
      //   outboundOrderList: [
      //     {
      //       id: 1250,
      //       code: "OO-S1121260200020",
      //       signoffOrderList: [
      //         {
      //           id: 821,
      //           code: "POD-S1121260200005",
      //           returnOrderList: [
      //             {
      //               orderNo: "SRO-S1111260200004",
      //               id: 1177,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo: "asdfasfasf",
      //                   id: Math.random(),
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo: "asdfasdfasf",
      //                       id: Math.random(),
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "invoiceNo",
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //             {
      //               orderNo: "SRO-S1111260200031",
      //               id: 1245,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo: "orderNo",
      //                   id: Math.random(),
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo: "orderNo",
      //                       id: Math.random(),
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "dadsf",
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //             {
      //               orderNo: "SRO-S1111260200032",
      //               id: 1246,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 719,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 719,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "invoiceNo",
      //                         },
      //                         // {
      //                         //   id: Math.random(),
      //                         //   invoiceNo: "invoiceNo222",
      //                         // },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 7191,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 3570,
    deliveryNoticeOrderList: [
      {
        orderNo: "DO-S1111260200053",
        id: 3529,
        outboundOrderList: [
          {
            id: 1251,
            code: "OO-S1121260200020",
            signoffOrderList: [
              {
                id: 821,
                code: "POD-S1121260200005",
                returnOrderList: [
                  {
                    orderNo: "SRO-S1111260200004",
                    id: 1177,
                    returnInboundOrderList: [
                      {
                        orderNo: "asdfasfasf",
                        id: Math.random(),
                        returnConfirmOrderList: [
                          {
                            orderNo: "asdfasdfasf",
                            id: Math.random(),
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "invoiceNo",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    orderNo: "SRO-S1111260200031",
                    id: 1245,
                    returnInboundOrderList: [
                      {
                        orderNo: "orderNo",
                        id: Math.random(),
                        returnConfirmOrderList: [
                          {
                            orderNo: "orderNo",
                            id: Math.random(),
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "dadsf",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    orderNo: "SRO-S1111260200032",
                    id: 1246,
                    returnInboundOrderList: [
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 719,
                            invoiceList: [
                              {
                                id: Math.random(),
                              },
                            ],
                          },
                        ],
                      },
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 719,
                            invoiceList: [
                              {
                                id: Math.random(),
                                invoiceNo: "invoiceNo",
                              },
                              // {
                              //   id: Math.random(),
                              //   invoiceNo: "invoiceNo222",
                              // },
                            ],
                          },
                        ],
                      },
                      {
                        orderNo:
                          "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                        id: 718,
                        returnConfirmOrderList: [
                          {
                            orderNo:
                              "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
                            id: 7191,
                            invoiceList: [
                              {
                                id: Math.random(),
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   orderNo: "DO-S1111260200053",
      //   id: 3528,
      //   outboundOrderList: [
      //     {
      //       id: 1250,
      //       code: "OO-S1121260200020",
      //       signoffOrderList: [
      //         {
      //           id: 821,
      //           code: "POD-S1121260200005",
      //           returnOrderList: [
      //             {
      //               orderNo: "SRO-S1111260200004",
      //               id: 1177,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo: "asdfasfasf",
      //                   id: Math.random(),
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo: "asdfasdfasf",
      //                       id: Math.random(),
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "invoiceNo",
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //             {
      //               orderNo: "SRO-S1111260200031",
      //               id: 1245,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo: "orderNo",
      //                   id: Math.random(),
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo: "orderNo",
      //                       id: Math.random(),
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "dadsf",
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //             {
      //               orderNo: "SRO-S1111260200032",
      //               id: 1246,
      //               returnInboundOrderList: [
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 719,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 719,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                           invoiceNo: "invoiceNo",
      //                         },
      //                         // {
      //                         //   id: Math.random(),
      //                         //   invoiceNo: "invoiceNo222",
      //                         // },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   orderNo:
      //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                   id: 718,
      //                   returnConfirmOrderList: [
      //                     {
      //                       orderNo:
      //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
      //                       id: 7191,
      //                       invoiceList: [
      //                         {
      //                           id: Math.random(),
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: 3570,
  //   deliveryNoticeOrderList: [
  //     {
  //       orderNo: "DO-S1111260200053",
  //       id: 3529,
  //       outboundOrderList: [
  //         {
  //           id: 1251,
  //           code: "OO-S1121260200020",
  //           signoffOrderList: [
  //             {
  //               id: 821,
  //               code: "POD-S1121260200005",
  //               returnOrderList: [
  //                 {
  //                   orderNo: "SRO-S1111260200004",
  //                   id: 1177,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo: "asdfasfasf",
  //                       id: Math.random(),
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo: "asdfasdfasf",
  //                           id: Math.random(),
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "invoiceNo",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   orderNo: "SRO-S1111260200031",
  //                   id: 1245,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo: "orderNo",
  //                       id: Math.random(),
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo: "orderNo",
  //                           id: Math.random(),
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "dadsf",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   orderNo: "SRO-S1111260200032",
  //                   id: 1246,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 719,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 719,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "invoiceNo",
  //                             },
  //                             // {
  //                             //   id: Math.random(),
  //                             //   invoiceNo: "invoiceNo222",
  //                             // },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 7191,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     // {
  //     //   orderNo: "DO-S1111260200053",
  //     //   id: 3528,
  //     //   outboundOrderList: [
  //     //     {
  //     //       id: 1250,
  //     //       code: "OO-S1121260200020",
  //     //       signoffOrderList: [
  //     //         {
  //     //           id: 821,
  //     //           code: "POD-S1121260200005",
  //     //           returnOrderList: [
  //     //             {
  //     //               orderNo: "SRO-S1111260200004",
  //     //               id: 1177,
  //     //               returnInboundOrderList: [
  //     //                 {
  //     //                   orderNo: "asdfasfasf",
  //     //                   id: Math.random(),
  //     //                   returnConfirmOrderList: [
  //     //                     {
  //     //                       orderNo: "asdfasdfasf",
  //     //                       id: Math.random(),
  //     //                       invoiceList: [
  //     //                         {
  //     //                           id: Math.random(),
  //     //                           invoiceNo: "invoiceNo",
  //     //                         },
  //     //                       ],
  //     //                     },
  //     //                   ],
  //     //                 },
  //     //               ],
  //     //             },
  //     //             {
  //     //               orderNo: "SRO-S1111260200031",
  //     //               id: 1245,
  //     //               returnInboundOrderList: [
  //     //                 {
  //     //                   orderNo: "orderNo",
  //     //                   id: Math.random(),
  //     //                   returnConfirmOrderList: [
  //     //                     {
  //     //                       orderNo: "orderNo",
  //     //                       id: Math.random(),
  //     //                       invoiceList: [
  //     //                         {
  //     //                           id: Math.random(),
  //     //                           invoiceNo: "dadsf",
  //     //                         },
  //     //                       ],
  //     //                     },
  //     //                   ],
  //     //                 },
  //     //               ],
  //     //             },
  //     //             {
  //     //               orderNo: "SRO-S1111260200032",
  //     //               id: 1246,
  //     //               returnInboundOrderList: [
  //     //                 {
  //     //                   orderNo:
  //     //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                   id: 718,
  //     //                   returnConfirmOrderList: [
  //     //                     {
  //     //                       orderNo:
  //     //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                       id: 719,
  //     //                       invoiceList: [
  //     //                         {
  //     //                           id: Math.random(),
  //     //                         },
  //     //                       ],
  //     //                     },
  //     //                   ],
  //     //                 },
  //     //                 {
  //     //                   orderNo:
  //     //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                   id: 718,
  //     //                   returnConfirmOrderList: [
  //     //                     {
  //     //                       orderNo:
  //     //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                       id: 719,
  //     //                       invoiceList: [
  //     //                         {
  //     //                           id: Math.random(),
  //     //                           invoiceNo: "invoiceNo",
  //     //                         },
  //     //                         // {
  //     //                         //   id: Math.random(),
  //     //                         //   invoiceNo: "invoiceNo222",
  //     //                         // },
  //     //                       ],
  //     //                     },
  //     //                   ],
  //     //                 },
  //     //                 {
  //     //                   orderNo:
  //     //                     "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                   id: 718,
  //     //                   returnConfirmOrderList: [
  //     //                     {
  //     //                       orderNo:
  //     //                         "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //     //                       id: 7191,
  //     //                       invoiceList: [
  //     //                         {
  //     //                           id: Math.random(),
  //     //                         },
  //     //                       ],
  //     //                     },
  //     //                   ],
  //     //                 },
  //     //               ],
  //     //             },
  //     //           ],
  //     //         },
  //     //       ],
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },

  // {
  //   id: 3572,
  //   deliveryNoticeOrderList: [
  //     {
  //       orderNo: "DO-S1111260200053",
  //       id: 3528,
  //       outboundOrderList: [
  //         {
  //           id: 1250,
  //           code: "OO-S1121260200020",
  //           signoffOrderList: [
  //             {
  //               id: 821,
  //               code: "POD-S1121260200005",
  //               returnOrderList: [
  //                 {
  //                   orderNo: "SRO-S1111260200004",
  //                   id: 1177,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo: "asdfasfasf",
  //                       id: Math.random(),
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo: "asdfasdfasf",
  //                           id: Math.random(),
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "invoiceNo",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   orderNo: "SRO-S1111260200031",
  //                   id: 1245,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo: "orderNo",
  //                       id: Math.random(),
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo: "orderNo",
  //                           id: Math.random(),
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "dadsf",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   orderNo: "SRO-S1111260200032",
  //                   id: 1246,
  //                   returnInboundOrderList: [
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 719,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 719,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                               invoiceNo: "invoiceNo",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                     {
  //                       orderNo:
  //                         "ReturnInboundOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                       id: 718,
  //                       returnConfirmOrderList: [
  //                         {
  //                           orderNo:
  //                             "ReturnConfirmOrderNo-4a429514-6bb2-49b3-a6df-049fbd4ec2cb",
  //                           id: 7191,
  //                           invoiceList: [
  //                             {
  //                               id: Math.random(),
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// 帮我把fakeList根据最后一层发票的信息，将数据结构打平，且顺序不变

function getNodeType(node) {
  if (node.deliveryNoticeOrderList) return "order";
  if (node.outboundOrderList) return "deliveryNotice";
  if (node.signoffOrderList) return "outbound";
  if (node.returnOrderList) return "signoff";
  if (node.returnInboundOrderList) return "returnOrder";
  if (node.returnConfirmOrderList) return "returnInboundOrder";
  if (node.invoiceList) return "returnConfirmOrder";
  // if (node.invoiceNo) return "invoice";
  return "invoiceNo";
}

function getChildren(node) {
  if (node.deliveryNoticeOrderList) return node.deliveryNoticeOrderList;
  if (node.outboundOrderList) return node.outboundOrderList;
  if (node.signoffOrderList) return node.signoffOrderList;
  if (node.returnOrderList) return node.returnOrderList;
  if (node.returnInboundOrderList) return node.returnInboundOrderList;
  if (node.returnConfirmOrderList) return node.returnConfirmOrderList;
  if (node.invoiceList) return node.invoiceList;
  return [];
}

function bfsPaths(root) {
  const paths = [];

  // 队列元素：{ node, path }，path 是从根到当前节点的节点信息数组
  const queue = [
    {
      node: root,
      path: [
        {
          state: root,
          type: getNodeType(root),
          // rowSpan: root.rowSpan
          //   ? root.rowSpan
          //   : getChildren(root)
          //     ? getChildren(root).length
          //     : 1,
        },
      ],
    },
  ];

  while (queue.length > 0) {
    const { node, path } = queue.shift();

    const children = getChildren(node);
    if (!children || children.length === 0) {
      // 到达叶子节点，记录完整路径
      paths.push(path);
    } else {
      // 将每个子节点加入队列，并更新路径
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childInfo = {
          state: child,
          type: getNodeType(child),
        };
        queue.push({
          node: child,
          path: path.concat(childInfo),
        });
      }
    }
  }

  return paths;
}

const findLevel = (node) => {
  if (getNodeType(node) === "returnConfirmOrder") {
    const child = getChildren(node);
    // child[0].isFirst = true;
    return child.length;
  }
  // node.isFirst = isFirst;
  const children = getChildren(node);

  let sum = 0;
  // 把统计每条链路的最大的子节点加到父节点
  if (children && children.length > 0) {
    children.forEach((item, idx) => {
      const childSum = findLevel(item);
      sum = sum + childSum;
    });
  }
  return sum;
};

const converstList = (fakeList) => {
  const temp = fakeList.reduce((item, next) => {
    const tmp = bfsPaths(next);

    const list = tmp.map((item, idx) => {
      const ob = item.reduce((cur, next, subIdx) => {
        if (subIdx == 0) {
          cur = {
            ...next.state,

            rowSpan: idx == 0 ? (tmp.length ?? 1) : undefined,
          };
        } else {
          cur[next.type] = {
            ...next.state,
            rowSpan: findLevel(next.state),
          };
        }
        return cur;
      }, {});
      return ob;
    });
    let tmp1 = null;
    list.forEach((item, idx) => {
      if (
        tmp1 == null ||
        tmp1?.deliveryNotice?.id != item?.deliveryNotice?.id
      ) {
        item.deliveryNotice.isFirst = true;
      }

      if (tmp1 == null || tmp1?.outbound?.id != item?.outbound?.id) {
        item.outbound.isFirst = true;
      }
      if (tmp1 == null || tmp1?.signoff?.id != item?.signoff?.id) {
        item.signoff.isFirst = true;
      }

      if (tmp1 == null || tmp1?.returnOrder?.id != item?.returnOrder?.id) {
        item.returnOrder.isFirst = true;
      }

      if (
        tmp1 == null ||
        tmp1?.returnInboundOrder?.id != item?.returnInboundOrder?.id
      ) {
        item.returnInboundOrder.isFirst = true;
      }

      if (
        tmp1 == null ||
        tmp1?.returnConfirmOrder?.id != item?.returnConfirmOrder?.id
      ) {
        item.returnConfirmOrder.isFirst = true;
      }
      tmp1 = item;
    });

    item.push(...list);
    return item;
  }, []);

  return temp;
};

// const temp2 = temp.map((item) => {
//   return item.paths;
// });

console.log("temp", converstList(fakeList));
// temp.reduce((pre, cur) => {});

// ============================================
// 深度递归方法集合
// ============================================

// 1. 深度优先遍历 - 返回所有节点
function dfsTraversal(root) {
  const result = [];

  function traverse(node) {
    result.push(node);
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child));
    }
  }

  traverse(root);
  return result;
}

// 2. 深度优先查找 - 查找满足条件的节点
function dfsFind(root, predicate) {
  if (predicate(root)) {
    return root;
  }

  if (root.children && root.children.length > 0) {
    for (const child of root.children) {
      const found = dfsFind(child, predicate);
      if (found) return found;
    }
  }

  return null;
}

// 3. 深度优先过滤 - 过滤出所有满足条件的节点
function dfsFilter(root, predicate) {
  let result = [];

  if (predicate(root)) {
    result.push(root);
  }

  if (root.children && root.children.length > 0) {
    for (const child of root.children) {
      result = result.concat(dfsFilter(child, predicate));
    }
  }

  return result;
}

// 4. 深度优先遍历并返回结果数组
function dfsMap(root, transformFn) {
  const result = [];

  function traverse(node) {
    const transformed = transformFn(node);
    result.push(transformed);

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child));
    }
  }

  traverse(root);
  return result;
}

// 5. 深度优先计算节点属性总和
function dfsSum(root, property) {
  let sum = property ? root[property] : 1;

  if (root.children && root.children.length > 0) {
    root.children.forEach(child => {
      sum += dfsSum(child, property);
    });
  }

  return sum;
}

// 6. 深度优先统计节点数量（按类型分组）
function dfsCountByType(root, typeProperty = 'type') {
  const counts = {};

  function traverse(node) {
    const type = node[typeProperty] || 'unknown';
    counts[type] = (counts[type] || 0) + 1;

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child));
    }
  }

  traverse(root);
  return counts;
}

// 7. 深度优先查找特定路径
function dfsFindPath(root, predicate, path = []) {
  const currentPath = [...path, root];
  if (predicate(root)) {
    return currentPath;
  }

  if (root.children && root.children.length > 0) {
    for (const child of root.children) {
      const foundPath = dfsFindPath(child, predicate, currentPath);
      if (foundPath) return foundPath;
    }
  }

  return null;
}

// 8. 深度优先修改节点属性
function dfsUpdate(root, updateFn) {
  updateFn(root);

  if (root.children && root.children.length > 0) {
    root.children.forEach(child => dfsUpdate(child, updateFn));
  }

  return root;
}

// 9. 深度优先计算树的最大深度
function dfsGetDepth(root) {
  if (!root.children || root.children.length === 0) {
    return 1;
  }

  let maxDepth = 0;
  root.children.forEach(child => {
    const depth = dfsGetDepth(child);
    maxDepth = Math.max(maxDepth, depth);
  });

  return maxDepth + 1;
}

// 10. 深度优先合并多个树的属性
function dfsMerge(root, sourceRoot, mapFn) {
  const merged = { ...root, ...sourceRoot };

  const children = root.children || [];
  const sourceChildren = sourceRoot.children || [];

  children.forEach((child, index) => {
    if (sourceChildren[index]) {
      dfsMerge(child, sourceChildren[index], mapFn);
    }
  });

  return merged;
}
