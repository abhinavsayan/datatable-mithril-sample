var dataView = {
    view: function () {
        return m('table.f6.w-100.mw8.center', [
            m('thead', m('tr.stripe-dark'), [
                m('th.fw6.tl.pa3.bg-white', 'locn_nbr'),
                m('th.fw6.tl.pa3.bg-white', 'online_order_id'),
                m('th.fw6.tl.pa3.bg-white', 'kns_id'),
                m('th.fw6.tl.pa3.bg-white', 'sku_proj_id'),
            ]),
            m('tbody.lh-copy', DataProvider.filteredData.map(function (d) {
                return m('tr.striped--light-gray ', [
                    m('td.pv2.ph3', d['locn_nbr']),
                    m('td.pv2.ph3', d['online_order_id']),
                    m('td.pv2.ph3', d['kns_id']),
                    m('td.pv2.ph3', d['sku_proj_id'])
                ]);
            }))]
        );
    }
};

var pageTool = {
    view: function () {
        return m('div.f6.w-100.mw8.center', [
            m("div.fl.w-50.w-20-ns.tc.pv5", [
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.firstPage(); } }, '|<<'),
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.prevPage(); } }, '<<'),
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.rowBack(); } }, '<')
            ]),
            m("div.fl.w-50.w-60-ns.tc.pv5", [
                m('span.f5.f4-m.f3-l.fw2.black-50.mt0.lh-copy', 'showing '),
                m('input.tc.w-10.f5.f4-m.f3-l.fw2.black-50.mt0.lh-copy', { value: DataProvider.count, onchange: function (e) { DataProvider.setCount(e.target.value); } }),
                m('span.f5.f4-m.f3-l.fw2.black-50.mt0.lh-copy', ' of ' + DataProvider.data.length + ' rows. Starting at row '),
                m('input.tc.w-10.f5.f4-m.f3-l.fw2.black-50.mt0.lh-copy', { value: DataProvider.from, onchange: function (e) { DataProvider.setFrom(e.target.value); } })
            ]),
            m("div.fl.w-50.w-20-ns.tc.pv5", [
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.rowFwd(); } }, '>'),
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.nextPage(); } }, '>>'),
                m('button.f6.link.dim.br2.ph3.pv2.mb2.dib.white.bg-black', { onclick: function () { DataProvider.lastPage(); } }, '>>|')
            ])
        ]);
    }
};

var app = {
    oninit: DataProvider.loadData,
    view: function () {
        return m('div', [m(pageTool), m(dataView)]);
    }
};




var root = document.body;

m.mount(root, app);