var copyOnly = function(filename, mid) {  var list = {    "cbtree/cbtree.profile":1,    "cbtree/cbtree.build":1,    "cbtree/package.json":1  };  return (mid in list) || (/^cbtree\/themes\//.test(mid) && !/\.css$/.test(filename)) || /(png|jpg|jpeg|gif|tiff)$/.test(filename);};var profile = {  releaseDir: "../release",  basePath : "..",  action: "release",  cssOptimize: "comments",  optimize: "closure",  layerOptimize: "closure",  mini: true,  layers: {    "dojo/dojo": {        include: [          "dojo/dojo",          "dojo/_base/array",          "dojo/data/ItemFileWriteStore",          "dojo/dom"        ],        customBase: true,        boot: true    },    "dijit/dijit": {        include: [          "dijit/form/CheckBox",          "dijit/Tree"        ]    },    "cbtree/cbtree": {        include: [          "cbtree/CheckBox",          "cbtree/ItemWriteStoreEX",          "cbtree/main",          "cbtree/StoreModel",          "cbtree/Tree"        ]    }  },    resourceTags: {    amd: function(filename, mid) {      return !copyOnly(filename, mid) && /\.js$/.test(filename);             },        copyOnly: function(filename, mid) {      return copyOnly(filename, mid);    }  }};