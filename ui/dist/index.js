require("./index.css");
var $6uPpa$reactjsxruntime = require("react/jsx-runtime");
var $6uPpa$react = require("react");
var $6uPpa$reactdom = require("react-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("regenerator-runtime/runtime");
var $6uPpa$reachrouter = require("@reach/router");
var $6uPpa$reactbootstrap = require("react-bootstrap");
var $6uPpa$axios = require("axios");
var $6uPpa$reactdatepicker = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










const $f4fc29e6246bfe35$var$apiClient = (0, ($parcel$interopDefault($6uPpa$axios))).create({
    timeout: 4000,
    headers: {
        "Context-Type": "application/json"
    }
}); // -------------------CURRENCIES--------------------------
const $f4fc29e6246bfe35$export$44c70bf85b4b0de1 = async ()=>{
    return await $f4fc29e6246bfe35$var$apiClient.get(`/api/currencies`).then(({ data: { currencies: currencies  }  })=>{
        return currencies;
    });
};
const $f4fc29e6246bfe35$export$9ad9f2465819777b = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.post(`/api/currencies`, payload).then(({ data: { currency: currency , errors: errors  }  })=>{
        return {
            currency: currency,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$bd058af708bdf29f = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.put(`/api/currencies/${payload.id}`, payload).then(({ data: { currency: currency , errors: errors  }  })=>{
        return {
            currency: currency,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$a124f3ea19ab5c77 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.delete(`/api/currencies/${payload.id}`).then(({ data: { errors: errors  }  })=>{
        return {
            errors: errors
        };
    });
}; // -------------------ACCOUNTS--------------------------
const $f4fc29e6246bfe35$export$cf3700686b7e5e5e = async ()=>{
    return await $f4fc29e6246bfe35$var$apiClient.get(`/api/accounts`).then(({ data: { accounts: accounts , currencies: currencies  }  })=>{
        return {
            accounts: accounts,
            currencies: currencies
        };
    });
};
const $f4fc29e6246bfe35$export$6f5378aa3397b877 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.post(`/api/accounts`, payload).then(({ data: { account: account , errors: errors  }  })=>{
        return {
            account: account,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$c5ce86ad982e5772 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.put(`/api/accounts/${payload.id}`, payload).then(({ data: { account: account , errors: errors  }  })=>{
        return {
            account: account,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$45abfc3976589d02 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.delete(`/api/accounts/${payload.id}`).then(({ data: { errors: errors  }  })=>{
        return {
            errors: errors
        };
    });
}; // -------------------TRANSACTIONS--------------------------
const $f4fc29e6246bfe35$export$76c764d5892a716b = async (page, accFromID, accToID)=>{
    return await $f4fc29e6246bfe35$var$apiClient.get(`/api/transactions?page=${page}&acc_from_id=${!!accFromID ? accFromID : ""}&acc_to_id=${!!accToID ? accToID : ""}`).then(({ data: { transactions: transactions , page: page , total_pages: total_pages , accounts_i: accounts_i , accounts_e: accounts_e , templates: templates , current_date: current_date  }  })=>{
        return {
            transactions: transactions,
            page: page,
            total_pages: total_pages,
            accounts_i: accounts_i,
            accounts_e: accounts_e,
            templates: templates,
            current_date: current_date
        };
    });
};
const $f4fc29e6246bfe35$export$714aebfec8ead7f0 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.post(`/api/transactions`, payload).then(({ data: { transaction: transaction , errors: errors  }  })=>{
        return {
            transaction: transaction,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$6304f306e65f34f4 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.put(`/api/transactions/${payload.id}`, payload).then(({ data: { transaction: transaction , errors: errors  }  })=>{
        return {
            transaction: transaction,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$1c84dd511da4b3e = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.delete(`/api/transactions/${payload.id}`).then(({ data: { errors: errors  }  })=>{
        return {
            errors: errors
        };
    });
}; // -------------------TEMPLATES--------------------------
const $f4fc29e6246bfe35$export$158d803760ae64cb = async ()=>{
    return await $f4fc29e6246bfe35$var$apiClient.get(`/api/templates`).then(({ data: { templates: templates , accounts: accounts  }  })=>{
        return {
            templates: templates,
            accounts: accounts
        };
    });
};
const $f4fc29e6246bfe35$export$7b7ae612b60e1630 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.post(`/api/templates`, payload).then(({ data: { template: template , errors: errors  }  })=>{
        return {
            template: template,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$efe36ac11163df30 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.put(`/api/templates/${payload.id}`, payload).then(({ data: { template: template , errors: errors  }  })=>{
        return {
            template: template,
            errors: errors
        };
    });
};
const $f4fc29e6246bfe35$export$eaca1c6e4717fe30 = async (payload)=>{
    return await $f4fc29e6246bfe35$var$apiClient.delete(`/api/templates/${payload.id}`).then(({ data: { errors: errors  }  })=>{
        return {
            errors: errors
        };
    });
}; // -------------------REPORTS--------------------------
const $f4fc29e6246bfe35$export$ddc84f913969b815 = async ()=>{
    return await $f4fc29e6246bfe35$var$apiClient.get(`/api/reports`).then(({ data: { reports: reports  }  })=>{
        return {
            reports: reports
        };
    });
};
var $f4fc29e6246bfe35$export$2e2bcd8739ae039 = $f4fc29e6246bfe35$var$apiClient;





const $4f8e5fb2dc7a6f8f$export$2d1720544b23b823 = (num)=>{
    return String(num.toFixed(2)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
};
const $4f8e5fb2dc7a6f8f$export$23f2a1d2818174ef = (num)=>{
    return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
};
const $4f8e5fb2dc7a6f8f$export$c5f661aff8040997 = (obj)=>{
    if (!obj) return [];
    const keys = Object.keys(obj).sort();
    const values = keys.map((k)=>{
        return {
            ...obj[k],
            key: k
        };
    });
    return values;
};



const $e8d03ec9178937b1$var$Balances = ({ records: records , tableClass: tableClass  })=>{
    const DataRows = ({ records: records  })=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
            children: records.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reachrouter.Link), {
                                to: `/transactions?acc_from_id=${el.AccountID}&acc_to_id=${el.AccountID}`,
                                children: el.AccountName
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            className: "text-right mono",
                            children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.Amount)
                        })
                    ]
                }, el.AccountName))
        });
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Table), {
        bordered: true,
        size: "sm",
        className: tableClass,
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
            children: (0, $4f8e5fb2dc7a6f8f$export$c5f661aff8040997)(records).map((el, i)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
                    children: [
                        i > 0 ? /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    children: "\xa0"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {})
                            ]
                        }) : null,
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("b", {
                                        children: el.key
                                    })
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right mono",
                                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("b", {
                                        children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.Total)
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)(DataRows, {
                            records: el.Records
                        })
                    ]
                }, el.key))
        })
    });
};
var $e8d03ec9178937b1$export$2e2bcd8739ae039 = $e8d03ec9178937b1$var$Balances;







const $9065fd3dd5a89f8a$var$Stocks = ({ records: records , rests: rests  })=>{
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Table), {
        bordered: true,
        size: "sm",
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("thead", {
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                            className: "text-center",
                            children: "In"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {}),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                            className: "text-center",
                            children: "Qty"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                            className: "text-center",
                            children: "Out"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
                children: (records || []).map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right",
                                    children: el.Incoming.map((inEl)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                                                    children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(inEl.Amount)
                                                }),
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                                                    className: "currency",
                                                    children: inEl.CurrencyCode
                                                }),
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("br", {})
                                            ]
                                        }, inEl.CurrencyCode))
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reachrouter.Link), {
                                        to: `/transactions?acc_from_id=${el.AccountID}&acc_to_id=${el.AccountID}`,
                                        children: el.AccountName
                                    })
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right",
                                    children: (0, $4f8e5fb2dc7a6f8f$export$23f2a1d2818174ef)(rests[el.CurrencyCode].Total)
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right",
                                    children: el.Outcoming.map((outEl)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                                                    children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(outEl.Amount)
                                                }),
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                                                    className: "currency",
                                                    children: outEl.CurrencyCode
                                                }),
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("br", {})
                                            ]
                                        }, outEl.CurrencyCode))
                                })
                            ]
                        })
                    }, el.AccountID))
            })
        ]
    });
};
var $9065fd3dd5a89f8a$export$2e2bcd8739ae039 = $9065fd3dd5a89f8a$var$Stocks;







const $78bfbb68d5e54c23$var$Stats = ({ records: records  })=>{
    const DataRows = ({ records: records  })=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
            children: records.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reachrouter.Link), {
                                to: `/transactions?acc_from_id=${el.AccountID}&acc_to_id=${el.AccountID}`,
                                children: el.AccountName
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            className: "text-right mono",
                            children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.Amount)
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            className: "text-right mono",
                            children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.Percent)
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                            className: "text-right mono",
                            children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.SumPercent)
                        })
                    ]
                }, el.AccountName))
        });
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Table), {
        bordered: true,
        size: "sm",
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
            children: (0, $4f8e5fb2dc7a6f8f$export$c5f661aff8040997)(records).map((el, i)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($6uPpa$react))).Fragment, {
                    children: [
                        i > 0 ? /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    children: "\xa0"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {}),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {}),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {})
                            ]
                        }) : null,
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("b", {
                                        children: el.key
                                    })
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right mono",
                                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("b", {
                                        children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(el.Total)
                                    })
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right",
                                    children: "%"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                    className: "text-right",
                                    children: "++%"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)(DataRows, {
                            records: el.Records
                        })
                    ]
                }, el.key))
        })
    });
};
var $78bfbb68d5e54c23$export$2e2bcd8739ae039 = $78bfbb68d5e54c23$var$Stats;


const $43cfae1f270606c1$var$Index = ()=>{
    const [records, setRecords] = (0, $6uPpa$react.useState)({});
    (0, $6uPpa$react.useEffect)(()=>{
        (0, $f4fc29e6246bfe35$export$ddc84f913969b815)().then(({ reports: reports  })=>{
            setRecords(reports);
        });
    }, []);
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                sm: 8,
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("h5", {
                        children: [
                            records.CurrentMonth,
                            " (",
                            records.CurrentDate,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 5,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $e8d03ec9178937b1$export$2e2bcd8739ae039), {
                                    records: records.CurrentIncome
                                })
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 7,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $78bfbb68d5e54c23$export$2e2bcd8739ae039), {
                                    records: records.CurrentExpense
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("h5", {
                        children: records.PreviousMonth
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 5,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $e8d03ec9178937b1$export$2e2bcd8739ae039), {
                                    records: records.PreviousIncome
                                })
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 7,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $78bfbb68d5e54c23$export$2e2bcd8739ae039), {
                                    records: records.PreviousExpense
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("h5", {
                        children: "Last 12 month"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 5,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $e8d03ec9178937b1$export$2e2bcd8739ae039), {
                                    records: records.YearIncome
                                })
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                                sm: 7,
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $78bfbb68d5e54c23$export$2e2bcd8739ae039), {
                                    records: records.YearExpense
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                sm: 4,
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("h5", {
                        children: "Balances+++"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $e8d03ec9178937b1$export$2e2bcd8739ae039), {
                        records: records.MoneyRests,
                        tableClass: "main"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("h5", {
                        children: "Stocks"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $9065fd3dd5a89f8a$export$2e2bcd8739ae039), {
                        records: records.IOStats,
                        rests: records.StocksRests
                    })
                ]
            })
        ]
    });
};
var $43cfae1f270606c1$export$2e2bcd8739ae039 = $43cfae1f270606c1$var$Index;












const $22a2da1936d7f90d$var$MoneyText = ({ record: record  })=>{
    if (record.account_from.currency.id === record.account_to.currency.id) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                className: `${record.account_from.tag}-${record.account_to.tag}`,
                children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(record.amount_from)
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                className: `currency`,
                children: record.account_from.currency.code
            })
        ]
    });
    else return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                className: record.account_from.tag,
                children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(record.amount_from)
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                className: `currency`,
                children: record.account_from.currency.code
            }),
            "\xa0",
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                className: "gray",
                children: "->"
            }),
            "\xa0",
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                className: record.account_to.tag,
                children: (0, $4f8e5fb2dc7a6f8f$export$2d1720544b23b823)(record.amount_to)
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                className: `currency`,
                children: record.account_to.currency.code
            })
        ]
    });
};
var $22a2da1936d7f90d$export$2e2bcd8739ae039 = $22a2da1936d7f90d$var$MoneyText;





const $8e82a277aa759d5f$var$TransactionsPagination = ({ loadRecords: loadRecords , page: page , setPage: setPage , totalPages: totalPages  })=>{
    const pages = Array.from(Array(totalPages > 40 ? 40 : totalPages));
    const handleClick = (newPage)=>{
        setPage(newPage);
        loadRecords(newPage);
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Pagination), {
        size: "sm",
        children: [
            pages.map((el, i)=>{
                if (i + 1 == page) return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Pagination).Item, {
                    active: true,
                    children: i + 1
                }, i);
                else return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Pagination).Item, {
                    active: false,
                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                        onClick: ()=>{
                            handleClick(i + 1);
                        },
                        children: i + 1
                    })
                }, i);
            }),
            totalPages > 20 ? "..." : ""
        ]
    });
};
var $8e82a277aa759d5f$export$2e2bcd8739ae039 = $8e82a277aa759d5f$var$TransactionsPagination;


const $d7bdff24699fb2b3$var$List = ({ records: records , templates: templates , setRecord: setRecord , setMode: setMode , loadRecords: loadRecords , page: page , setPage: setPage , totalPages: totalPages , today: today  })=>{
    const [show, setShow] = (0, $6uPpa$react.useState)(false);
    const [toDelete, setToDelete] = (0, $6uPpa$react.useState)({});
    const handleClose = ()=>setShow(false);
    const handleShow = (record)=>{
        setToDelete(record);
        setShow(true);
    };
    const setNewMode = (template)=>{
        const currDate = new Date();
        const has = !!template && template.id != 0;
        setRecord({
            dt: `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${currDate.getDate()}`,
            description: "",
            account_from: has ? template.account_from : {},
            account_to: has ? template.account_to : {},
            amount_from: has ? template.amount_from : 0,
            amount_to: has ? template.amount_to : 0
        });
        setMode("new");
    };
    const setEditMode = (record)=>{
        setRecord({
            ...record
        });
        setMode("edit");
    };
    const handleDelete = ()=>{
        (0, $f4fc29e6246bfe35$export$1c84dd511da4b3e)(toDelete).then(({ errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords(1);
        });
        setShow(false);
    };
    const getDayClass = (record)=>{
        if (record.dt == today) return "day-current";
        if (record.odd_even == 0) return "day-even";
        if (record.odd_even == 1) return "day-odd";
        return "";
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Table), {
                    bordered: true,
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("thead", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("th", {
                                        colSpan: "6",
                                        className: "buttons",
                                        children: [
                                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                variant: "outline-primary",
                                                size: "sm",
                                                onClick: ()=>{
                                                    setNewMode();
                                                },
                                                children: "New"
                                            }),
                                            templates.map((el, i)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                    variant: "outline-primary",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setNewMode(el);
                                                    },
                                                    children: el.description
                                                }, i))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                            variant: "outline-primary",
                                            size: "sm",
                                            onClick: ()=>{
                                                loadRecords(1, null, null);
                                            },
                                            children: "Reset"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
                            children: records.map((record)=>{
                                return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                    className: getDayClass(record),
                                    children: [
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.id
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.dt
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    loadRecords(1, record.account_from.id, null);
                                                    e.preventDefault();
                                                },
                                                children: record.account_from.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            className: "text-right mono",
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $22a2da1936d7f90d$export$2e2bcd8739ae039), {
                                                record: record
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    loadRecords(1, null, record.account_to.id);
                                                    e.preventDefault();
                                                },
                                                children: record.account_to.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.description
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                variant: "outline-primary",
                                                size: "sm",
                                                onClick: ()=>{
                                                    handleShow(record);
                                                },
                                                children: "Delete"
                                            })
                                        })
                                    ]
                                }, record.id);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $8e82a277aa759d5f$export$2e2bcd8739ae039), {
                    loadRecords: loadRecords,
                    page: page,
                    setPage: setPage,
                    totalPages: totalPages
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal), {
                    show: show,
                    onHide: handleClose,
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Title, {
                                children: "Confirm delete"
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Body, {
                            children: "Sure?"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal).Footer, {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "secondary",
                                    onClick: handleClose,
                                    children: "No"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "primary",
                                    onClick: handleDelete,
                                    children: "Yes, delete"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $d7bdff24699fb2b3$export$2e2bcd8739ae039 = $d7bdff24699fb2b3$var$List;








const $c9b3e28522c1ac24$var$Editor = ({ record: record , setMode: setMode , setRecord: setRecord , loadRecords: loadRecords , accountsI: accountsI , accountsE: accountsE  })=>{
    const [errors, setErrors] = (0, $6uPpa$react.useState)({});
    const [dt, setDt] = (0, $6uPpa$react.useState)(new Date(record.dt));
    const handleAccountFromChange = (e)=>{
        const newID = parseInt(e.target.value);
        const newAccount = accountsI.find((el)=>{
            return el.id === newID;
        });
        setRecord({
            ...record,
            account_from: newAccount
        });
    };
    const handleAccountToChange = (e)=>{
        const newID = parseInt(e.target.value);
        const newAccount = accountsE.find((el)=>{
            return el.id === newID;
        });
        setRecord({
            ...record,
            account_to: newAccount
        });
    };
    const handleAmountFromChange = (e)=>{
        setRecord({
            ...record,
            amount_from: e.target.value
        });
    };
    const handleAmountToChange = (e)=>{
        setRecord({
            ...record,
            amount_to: e.target.value
        });
    };
    const handleDescriptionChange = (e)=>{
        setRecord({
            ...record,
            description: e.target.value
        });
    };
    const handleSubmit = ()=>{
        const f = !!record.id ? (0, $f4fc29e6246bfe35$export$6304f306e65f34f4) : (0, $f4fc29e6246bfe35$export$714aebfec8ead7f0), amount_from = typeof record.amount_from == "string" ? parseFloat(record.amount_from.replace(",", ".")) : record.amount_from, amount_to = typeof record.amount_to == "string" ? parseFloat(record.amount_to.replace(",", ".")) : record.amount_to;
        const payload = {
            id: record.id,
            description: record.description,
            dt: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`,
            account_from_id: record.account_from.id,
            account_to_id: record.account_to.id,
            amount_from: amount_from,
            amount_to: amount_to
        };
        f(payload).then(({ transaction: transaction , errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords(1);
            else setErrors(errors);
        });
    };
    const handleBack = ()=>{
        setMode("list");
    };
    const handleFocus = (event)=>event.target.select();
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                    sm: 2,
                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                children: "Date"
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("div", {
                                className: !!errors.dt ? "is-invalid" : "",
                                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, ($parcel$interopDefault($6uPpa$reactdatepicker))), {
                                    dateFormat: "yyyy-MM-dd",
                                    selected: dt,
                                    onChange: (date)=>setDt(date),
                                    className: "form-control form-control-sm"
                                })
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                type: "invalid",
                                tooltip: true,
                                children: errors.dt && errors.dt.join("; ")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                        sm: 3,
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        as: "select",
                                        size: "sm",
                                        value: record.account_from.id,
                                        onChange: handleAccountFromChange,
                                        isInvalid: !!errors.account_from,
                                        children: [
                                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                value: "",
                                                children: "---"
                                            }),
                                            accountsI.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                    value: el.id,
                                                    children: el.name
                                                }, el.id))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.account_from && errors.account_from.join("; ")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        size: "sm",
                                        value: record.amount_from,
                                        onChange: handleAmountFromChange,
                                        isInvalid: !!errors.amount_from,
                                        autoFocus: true,
                                        onFocus: handleFocus
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.amount_from && errors.amount_from.join("; ")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                        sm: 3,
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        as: "select",
                                        size: "sm",
                                        value: record.account_to.id,
                                        onChange: handleAccountToChange,
                                        isInvalid: !!errors.account_to,
                                        children: [
                                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                value: "",
                                                children: "---"
                                            }),
                                            accountsE.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                    value: el.id,
                                                    children: el.name
                                                }, el.id))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.account_to && errors.account_to.join("; ")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        size: "sm",
                                        value: record.amount_to,
                                        onChange: handleAmountToChange,
                                        isInvalid: !!errors.amount_to,
                                        onFocus: handleFocus
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.amount_to && errors.amount_to.join("; ")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                    sm: 6,
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                    size: "sm",
                                    value: record.description,
                                    onChange: handleDescriptionChange,
                                    isInvalid: !!errors.description
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                    type: "invalid",
                                    tooltip: true,
                                    children: errors.description && errors.description.join("; ")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.ButtonGroup), {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "secondary",
                                    type: "button",
                                    onClick: handleBack,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "primary",
                                    type: "submit",
                                    onClick: handleSubmit,
                                    children: "Submit"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $c9b3e28522c1ac24$export$2e2bcd8739ae039 = $c9b3e28522c1ac24$var$Editor;


const $abcc8faa7056ab4e$var$Page = ({ mode: mode , setMode: setMode  })=>{
    const [records, setRecords] = (0, $6uPpa$react.useState)([]);
    const [accountsI, setAccountsI] = (0, $6uPpa$react.useState)([]);
    const [accountsE, setAccountsE] = (0, $6uPpa$react.useState)([]);
    const [templates, setTemplates] = (0, $6uPpa$react.useState)([]);
    const [record, setRecord] = (0, $6uPpa$react.useState)({});
    const [page, setPage] = (0, $6uPpa$react.useState)(1);
    const [totalPages, setTotalPages] = (0, $6uPpa$react.useState)(1);
    const [today, setToday] = (0, $6uPpa$react.useState)("");
    const loadRecords = (page, accFromID, accToID)=>{
        (0, $f4fc29e6246bfe35$export$76c764d5892a716b)(page, accFromID, accToID).then(({ transactions: transactions , accounts_i: accounts_i , accounts_e: accounts_e , templates: templates , page: page , total_pages: total_pages , current_date: current_date  })=>{
            setRecords(transactions);
            setAccountsI(accounts_i);
            setAccountsE(accounts_e);
            setTemplates(templates);
            setMode("list");
            setPage(page);
            setTotalPages(total_pages);
            setToday(current_date);
        });
    };
    (0, $6uPpa$react.useEffect)(()=>{
        const params = new URLSearchParams(window.location.search);
        loadRecords(1, params.get("acc_from_id"), params.get("acc_to_id"));
    }, []);
    if (mode == "list") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $d7bdff24699fb2b3$export$2e2bcd8739ae039), {
        records: records,
        templates: templates,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords,
        page: page,
        setPage: setPage,
        totalPages: totalPages,
        today: today
    });
    else if (mode == "new" || mode == "edit") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $c9b3e28522c1ac24$export$2e2bcd8739ae039), {
        record: record,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords,
        accountsI: accountsI,
        accountsE: accountsE
    });
    else return null;
};
var $abcc8faa7056ab4e$export$2e2bcd8739ae039 = $abcc8faa7056ab4e$var$Page;









const $a3855dca20d79a29$var$List = ({ records: records , setRecord: setRecord , setMode: setMode , loadRecords: loadRecords  })=>{
    const [show, setShow] = (0, $6uPpa$react.useState)(false);
    const [toDelete, setToDelete] = (0, $6uPpa$react.useState)({});
    const handleClose = ()=>setShow(false);
    const handleShow = (record)=>{
        setToDelete(record);
        setShow(true);
    };
    const setNewMode = ()=>{
        setRecord({
            name: "",
            tag: "",
            visible: true,
            currency: {}
        });
        setMode("new");
    };
    const setEditMode = (record)=>{
        setRecord({
            ...record
        });
        setMode("edit");
    };
    const handleDelete = ()=>{
        (0, $f4fc29e6246bfe35$export$45abfc3976589d02)(toDelete).then(({ errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords();
        });
        setShow(false);
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            sm: 6,
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Table), {
                    striped: true,
                    bordered: true,
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("thead", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                            variant: "outline-primary",
                                            size: "sm",
                                            onClick: setNewMode,
                                            children: "New"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Currency"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Tag"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Visible"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
                            children: records.map((record)=>{
                                return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.id
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.currency.name
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.tag
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.visible ? /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Badge), {
                                                variant: "success",
                                                children: "Yes"
                                            }) : /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Badge), {
                                                variant: "secondary",
                                                children: "No"
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                variant: "outline-primary",
                                                size: "sm",
                                                onClick: ()=>{
                                                    handleShow(record);
                                                },
                                                children: "Delete"
                                            })
                                        })
                                    ]
                                }, record.id);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal), {
                    show: show,
                    onHide: handleClose,
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Title, {
                                children: "Confirm delete"
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Body, {
                            children: "Sure?"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal).Footer, {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "secondary",
                                    onClick: handleClose,
                                    children: "No"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "primary",
                                    onClick: handleDelete,
                                    children: "Yes, delete"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $a3855dca20d79a29$export$2e2bcd8739ae039 = $a3855dca20d79a29$var$List;






const $bb515bd5ea5a0490$var$Editor = ({ record: record , setMode: setMode , setRecord: setRecord , loadRecords: loadRecords , currencies: currencies  })=>{
    const [errors, setErrors] = (0, $6uPpa$react.useState)({});
    const handleTagChange = (e)=>{
        setRecord({
            ...record,
            tag: e.target.value
        });
    };
    const handleCurrencyChange = (e)=>{
        const newID = parseInt(e.target.value);
        const newCurrency = currencies.find((el)=>{
            return el.id === newID;
        });
        setRecord({
            ...record,
            currency: newCurrency
        });
    };
    const handleVisibleChange = (e)=>{
        setRecord({
            ...record,
            visible: !record.visible
        });
    };
    const handleNameChange = (e)=>{
        setRecord({
            ...record,
            name: e.target.value
        });
    };
    const handleSubmit = ()=>{
        const f = !!record.id ? (0, $f4fc29e6246bfe35$export$c5ce86ad982e5772) : (0, $f4fc29e6246bfe35$export$6f5378aa3397b877);
        const payload = {
            id: record.id,
            name: record.name,
            tag: record.tag,
            currency_id: record.currency.id,
            visible: record.visible
        };
        f(payload).then(({ account: account , errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords();
            else setErrors(errors);
        });
    };
    const handleBack = ()=>{
        setMode("list");
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            sm: 6,
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Name"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                            size: "sm",
                            value: record.name,
                            onChange: handleNameChange,
                            isInvalid: !!errors.name
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.name && errors.name.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Currency"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                            as: "select",
                            size: "sm",
                            value: record.currency.id,
                            onChange: handleCurrencyChange,
                            isInvalid: !!errors.currency,
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "",
                                    children: "---"
                                }),
                                currencies.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                        value: el.id,
                                        children: el.name
                                    }, el.id))
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.currency && errors.currency.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Tag"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                            as: "select",
                            size: "sm",
                            value: record.tag,
                            onChange: handleTagChange,
                            isInvalid: !!errors.tag,
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "",
                                    children: "---"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "expense",
                                    children: "Expense"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "income",
                                    children: "Income"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "balance",
                                    children: "Balance"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "stocks",
                                    children: "Stocks Balance"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.tag && errors.tag.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Check, {
                            type: "switch",
                            id: "custom-switch",
                            label: "Visible",
                            isInvalid: !!errors.visible,
                            checked: record.visible,
                            onChange: handleVisibleChange
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.visible && errors.visible.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.ButtonGroup), {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                            variant: "secondary",
                            type: "button",
                            onClick: handleBack,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                            variant: "primary",
                            type: "button",
                            onClick: handleSubmit,
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
};
var $bb515bd5ea5a0490$export$2e2bcd8739ae039 = $bb515bd5ea5a0490$var$Editor;


const $9561f400abdaafe3$var$Page = ({ mode: mode , setMode: setMode  })=>{
    const [records, setRecords] = (0, $6uPpa$react.useState)([]);
    const [currencies, setCurrencies] = (0, $6uPpa$react.useState)([]);
    const [record, setRecord] = (0, $6uPpa$react.useState)({});
    const loadRecords = ()=>{
        (0, $f4fc29e6246bfe35$export$cf3700686b7e5e5e)().then(({ accounts: accounts , currencies: currencies  })=>{
            setRecords(accounts);
            setCurrencies(currencies);
            setMode("list");
        });
    };
    (0, $6uPpa$react.useEffect)(()=>{
        loadRecords();
    }, []);
    if (mode == "list") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $a3855dca20d79a29$export$2e2bcd8739ae039), {
        records: records,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords
    });
    else if (mode == "new" || mode == "edit") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $bb515bd5ea5a0490$export$2e2bcd8739ae039), {
        record: record,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords,
        currencies: currencies
    });
    else return null;
};
var $9561f400abdaafe3$export$2e2bcd8739ae039 = $9561f400abdaafe3$var$Page;









const $ed32ea82e7c98820$var$List = ({ records: records , setMode: setMode , setRecord: setRecord , loadRecords: loadRecords  })=>{
    const [show, setShow] = (0, $6uPpa$react.useState)(false);
    const [toDelete, setToDelete] = (0, $6uPpa$react.useState)({});
    const handleClose = ()=>setShow(false);
    const handleShow = (record)=>{
        setToDelete(record);
        setShow(true);
    };
    const setNewMode = ()=>{
        setRecord({
            name: "",
            code: "",
            tag: "curr"
        });
        setMode("new");
    };
    const setEditMode = (record)=>{
        setRecord({
            ...record
        });
        setMode("edit");
    };
    const handleDelete = ()=>{
        (0, $f4fc29e6246bfe35$export$a124f3ea19ab5c77)(toDelete).then(({ errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords();
        });
        setShow(false);
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            sm: 6,
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Table), {
                    striped: true,
                    bordered: true,
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("thead", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                            variant: "outline-primary",
                                            size: "sm",
                                            onClick: setNewMode,
                                            children: "New"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Code"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: "Tag"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
                            children: records.map((record)=>{
                                return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.id
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.name
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.code
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.tag
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                variant: "outline-primary",
                                                size: "sm",
                                                onClick: ()=>{
                                                    handleShow(record);
                                                },
                                                children: "Delete"
                                            })
                                        })
                                    ]
                                }, record.id);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal), {
                    show: show,
                    onHide: handleClose,
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Title, {
                                children: "Confirm delete"
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Body, {
                            children: "Sure?"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal).Footer, {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "secondary",
                                    onClick: handleClose,
                                    children: "No"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "primary",
                                    onClick: handleDelete,
                                    children: "Yes, delete"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $ed32ea82e7c98820$export$2e2bcd8739ae039 = $ed32ea82e7c98820$var$List;






const $4fe047a14c880f36$var$Editor = ({ record: record , setMode: setMode , setRecord: setRecord , loadRecords: loadRecords  })=>{
    const [errors, setErrors] = (0, $6uPpa$react.useState)({});
    const handleTagChange = (e)=>{
        setRecord({
            ...record,
            tag: e.target.value
        });
    };
    const handleCodeChange = (e)=>{
        setRecord({
            ...record,
            code: e.target.value
        });
    };
    const handleNameChange = (e)=>{
        setRecord({
            ...record,
            name: e.target.value
        });
    };
    const handleSubmit = ()=>{
        const f = !!record.id ? (0, $f4fc29e6246bfe35$export$bd058af708bdf29f) : (0, $f4fc29e6246bfe35$export$9ad9f2465819777b);
        f(record).then(({ currency: currency , errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords();
            else setErrors(errors);
        });
    };
    const handleBack = ()=>{
        setMode("list");
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            sm: 6,
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Name"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                            size: "sm",
                            value: record.name,
                            onChange: handleNameChange,
                            isInvalid: !!errors.name
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.name && errors.name.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Code"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                            size: "sm",
                            value: record.code,
                            onChange: handleCodeChange,
                            isInvalid: !!errors.code
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.code && errors.code.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                            children: "Tag"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                            as: "select",
                            size: "sm",
                            value: record.tag,
                            onChange: handleTagChange,
                            isInvalid: !!errors.tag,
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "curr",
                                    children: "Currency"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                    value: "stock",
                                    children: "Stock"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                            type: "invalid",
                            tooltip: true,
                            children: errors.tag && errors.tag.join("; ")
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.ButtonGroup), {
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                            variant: "secondary",
                            type: "button",
                            onClick: handleBack,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                            variant: "primary",
                            type: "button",
                            onClick: handleSubmit,
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
};
var $4fe047a14c880f36$export$2e2bcd8739ae039 = $4fe047a14c880f36$var$Editor;


const $2fe85af360c70d6c$var$Page = ({ mode: mode , setMode: setMode  })=>{
    const [records, setRecords] = (0, $6uPpa$react.useState)([]);
    const [record, setRecord] = (0, $6uPpa$react.useState)({});
    const loadRecords = ()=>{
        (0, $f4fc29e6246bfe35$export$44c70bf85b4b0de1)().then((data)=>{
            setRecords(data);
            setMode("list");
        });
    };
    (0, $6uPpa$react.useEffect)(()=>{
        loadRecords();
    }, []);
    if (mode == "list") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $ed32ea82e7c98820$export$2e2bcd8739ae039), {
        records: records,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords
    });
    else if (mode == "new" || mode == "edit") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $4fe047a14c880f36$export$2e2bcd8739ae039), {
        record: record,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords
    });
    else return null;
};
var $2fe85af360c70d6c$export$2e2bcd8739ae039 = $2fe85af360c70d6c$var$Page;









const $602d3f92ef78b7b1$var$List = ({ records: records , setRecord: setRecord , setMode: setMode , loadRecords: loadRecords  })=>{
    const [show, setShow] = (0, $6uPpa$react.useState)(false);
    const [toDelete, setToDelete] = (0, $6uPpa$react.useState)({});
    const handleClose = ()=>setShow(false);
    const handleShow = (record)=>{
        setToDelete(record);
        setShow(true);
    };
    const setNewMode = ()=>{
        const currDate = new Date();
        setRecord({
            dt: `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${currDate.getDate()}`,
            description: "",
            account_from: {},
            account_to: {},
            amount_from: 0,
            amount_to: 0
        });
        setMode("new");
    };
    const setEditMode = (record)=>{
        setRecord({
            ...record
        });
        setMode("edit");
    };
    const handleDelete = ()=>{
        (0, $f4fc29e6246bfe35$export$eaca1c6e4717fe30)(toDelete).then(({ errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords(1);
        });
        setShow(false);
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
            sm: 6,
            children: [
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Table), {
                    bordered: true,
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("thead", {
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                            variant: "outline-primary",
                                            size: "sm",
                                            onClick: setNewMode,
                                            children: "New"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        className: "text-center",
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {}),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        className: "text-center",
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {
                                        className: "text-center",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("th", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("tbody", {
                            children: records.map((record)=>{
                                return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    setEditMode(record);
                                                    e.preventDefault();
                                                },
                                                children: record.id
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.description
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.account_from.name
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)("td", {
                                            className: "text-right",
                                            children: [
                                                record.amount_from.toLocaleString(),
                                                "\xa0",
                                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("span", {
                                                    className: "gray",
                                                    children: "->"
                                                }),
                                                "\xa0",
                                                record.amount_to.toLocaleString()
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: record.account_to.name
                                        }),
                                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("td", {
                                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                                variant: "outline-primary",
                                                size: "sm",
                                                onClick: ()=>{
                                                    handleShow(record);
                                                },
                                                children: "Delete"
                                            })
                                        })
                                    ]
                                }, record.id);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal), {
                    show: show,
                    onHide: handleClose,
                    children: [
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Title, {
                                children: "Confirm delete"
                            })
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Modal).Body, {
                            children: "Sure?"
                        }),
                        /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Modal).Footer, {
                            children: [
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "secondary",
                                    onClick: handleClose,
                                    children: "No"
                                }),
                                /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                    variant: "primary",
                                    onClick: handleDelete,
                                    children: "Yes, delete"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $602d3f92ef78b7b1$export$2e2bcd8739ae039 = $602d3f92ef78b7b1$var$List;






const $dc56d2b62d98bc71$var$Editor = ({ record: record , setMode: setMode , setRecord: setRecord , loadRecords: loadRecords , accounts: accounts  })=>{
    const [errors, setErrors] = (0, $6uPpa$react.useState)({});
    const handleAccountFromChange = (e)=>{
        const newID = parseInt(e.target.value);
        const newAccount = accounts.find((el)=>{
            return el.id === newID;
        });
        setRecord({
            ...record,
            account_from: newAccount
        });
    };
    const handleAccountToChange = (e)=>{
        const newID = parseInt(e.target.value);
        const newAccount = accounts.find((el)=>{
            return el.id === newID;
        });
        setRecord({
            ...record,
            account_to: newAccount
        });
    };
    const handleAmountFromChange = (e)=>{
        setRecord({
            ...record,
            amount_from: e.target.value
        });
    };
    const handleAmountToChange = (e)=>{
        setRecord({
            ...record,
            amount_to: e.target.value
        });
    };
    const handleDescriptionChange = (e)=>{
        setRecord({
            ...record,
            description: e.target.value
        });
    };
    const handleSubmit = ()=>{
        const f = !!record.id ? (0, $f4fc29e6246bfe35$export$efe36ac11163df30) : (0, $f4fc29e6246bfe35$export$7b7ae612b60e1630);
        const payload = {
            id: record.id,
            description: record.description,
            account_from_id: record.account_from.id,
            account_to_id: record.account_to.id,
            amount_from: parseFloat(record.amount_from),
            amount_to: parseFloat(record.amount_to)
        };
        f(payload).then(({ template: template , errors: errors  })=>{
            if (Object.keys(errors).length == 0) loadRecords();
            else setErrors(errors);
        });
    };
    const handleBack = ()=>{
        setMode("list");
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                    sm: 6,
                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                children: "Description"
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                size: "sm",
                                value: record.description,
                                onChange: handleDescriptionChange,
                                isInvalid: !!errors.description
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                type: "invalid",
                                tooltip: true,
                                children: errors.description && errors.description.join("; ")
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Row), {
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                        sm: 3,
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        as: "select",
                                        size: "sm",
                                        value: record.account_from.id,
                                        onChange: handleAccountFromChange,
                                        isInvalid: !!errors.account_from,
                                        children: [
                                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                value: "",
                                                children: "---"
                                            }),
                                            accounts.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                    value: el.id,
                                                    children: el.name
                                                }, el.id))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.account_from && errors.account_from.join("; ")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        size: "sm",
                                        value: record.amount_from,
                                        onChange: handleAmountFromChange,
                                        isInvalid: !!errors.amount_from
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.amount_from && errors.amount_from.join("; ")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Col), {
                        sm: 3,
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Label, {
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        as: "select",
                                        size: "sm",
                                        value: record.account_to.id,
                                        onChange: handleAccountToChange,
                                        isInvalid: !!errors.account_to,
                                        children: [
                                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                value: "",
                                                children: "---"
                                            }),
                                            accounts.map((el)=>/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)("option", {
                                                    value: el.id,
                                                    children: el.name
                                                }, el.id))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.account_to && errors.account_to.join("; ")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Form).Group, {
                                children: [
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control, {
                                        size: "sm",
                                        value: record.amount_to,
                                        onChange: handleAmountToChange,
                                        isInvalid: !!errors.amount_to
                                    }),
                                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Form).Control.Feedback, {
                                        type: "invalid",
                                        tooltip: true,
                                        children: errors.amount_to && errors.amount_to.join("; ")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Row), {
                children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Col), {
                    sm: 6,
                    children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.ButtonGroup), {
                        children: [
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                variant: "secondary",
                                type: "button",
                                onClick: handleBack,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Button), {
                                variant: "primary",
                                type: "button",
                                onClick: handleSubmit,
                                children: "Submit"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
var $dc56d2b62d98bc71$export$2e2bcd8739ae039 = $dc56d2b62d98bc71$var$Editor;


const $f1c47d560fb9db7c$var$Page = ({ mode: mode , setMode: setMode  })=>{
    const [records, setRecords] = (0, $6uPpa$react.useState)([]);
    const [accounts, setAccounts] = (0, $6uPpa$react.useState)([]);
    const [record, setRecord] = (0, $6uPpa$react.useState)({});
    const loadRecords = ()=>{
        (0, $f4fc29e6246bfe35$export$158d803760ae64cb)().then(({ templates: templates , accounts: accounts  })=>{
            setRecords(templates);
            setAccounts(accounts);
            setMode("list");
        });
    };
    (0, $6uPpa$react.useEffect)(()=>{
        loadRecords(1);
    }, []);
    if (mode == "list") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $602d3f92ef78b7b1$export$2e2bcd8739ae039), {
        records: records,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords
    });
    else if (mode == "new" || mode == "edit") return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $dc56d2b62d98bc71$export$2e2bcd8739ae039), {
        record: record,
        setMode: setMode,
        setRecord: setRecord,
        loadRecords: loadRecords,
        accounts: accounts
    });
    else return null;
};
var $f1c47d560fb9db7c$export$2e2bcd8739ae039 = $f1c47d560fb9db7c$var$Page;






const $f4ea9104b957363b$var$NavLink = (props)=>{
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reachrouter.Link), {
        ...props,
        getProps: ({ isCurrent: isCurrent  })=>{
            if (isCurrent) return {
                className: "nav-link active"
            };
            else return {
                className: "nav-link"
            };
        }
    });
};
var $f4ea9104b957363b$export$2e2bcd8739ae039 = $f4ea9104b957363b$var$NavLink;


const $4e377c42f539ba61$var$App = ()=>{
    const [mode, setMode] = (0, $6uPpa$react.useState)("");
    const setModeList = ()=>{
        setMode("list");
    };
    return /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Container), {
        children: [
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reactbootstrap.Nav), {
                variant: "pills",
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Item, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Link, {
                            as: (0, $f4ea9104b957363b$export$2e2bcd8739ae039),
                            to: "/",
                            children: "Summary"
                        })
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Item, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Link, {
                            as: (0, $f4ea9104b957363b$export$2e2bcd8739ae039),
                            to: "/transactions",
                            onClick: setModeList,
                            children: "Transactions"
                        })
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Item, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Link, {
                            as: (0, $f4ea9104b957363b$export$2e2bcd8739ae039),
                            to: "/templates",
                            onClick: setModeList,
                            children: "Templates"
                        })
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Item, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Link, {
                            as: (0, $f4ea9104b957363b$export$2e2bcd8739ae039),
                            to: "/accounts",
                            onClick: setModeList,
                            children: "Accounts"
                        })
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Item, {
                        children: /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $6uPpa$reactbootstrap.Nav).Link, {
                            as: (0, $f4ea9104b957363b$export$2e2bcd8739ae039),
                            to: "/currencies",
                            onClick: setModeList,
                            children: "Currencies"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsxs)((0, $6uPpa$reachrouter.Router), {
                children: [
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $43cfae1f270606c1$export$2e2bcd8739ae039), {
                        path: "/"
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $abcc8faa7056ab4e$export$2e2bcd8739ae039), {
                        path: "/transactions",
                        mode: mode,
                        setMode: setMode
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $f1c47d560fb9db7c$export$2e2bcd8739ae039), {
                        path: "/templates",
                        mode: mode,
                        setMode: setMode
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $9561f400abdaafe3$export$2e2bcd8739ae039), {
                        path: "/accounts",
                        mode: mode,
                        setMode: setMode
                    }),
                    /*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $2fe85af360c70d6c$export$2e2bcd8739ae039), {
                        path: "/currencies",
                        mode: mode,
                        setMode: setMode
                    })
                ]
            })
        ]
    });
};
var $4e377c42f539ba61$export$2e2bcd8739ae039 = $4e377c42f539ba61$var$App;





let $d3928351bb4a0237$var$anchorPoint = document.getElementById("app");
(0, ($parcel$interopDefault($6uPpa$reactdom))).render(/*#__PURE__*/ (0, $6uPpa$reactjsxruntime.jsx)((0, $4e377c42f539ba61$export$2e2bcd8739ae039), {}), $d3928351bb4a0237$var$anchorPoint);


