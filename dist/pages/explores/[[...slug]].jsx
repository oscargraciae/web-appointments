"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
// components
var BusinessList_1 = __importDefault(require("../../components/explore/BusinessList"));
var ExploreMap_1 = require("../../components/explore/ExploreMap");
var exploreContext_1 = require("../../context/exploreContext");
var ExploreForm_1 = require("../../components/explore/ExploreForm");
var router_1 = require("next/router");
var Explore = function () {
    var router = router_1.useRouter();
    console.log('Router', router);
    var _a = router.query, slug = _a.slug, place = _a.place, cat = _a.cat;
    var placeId = place === null || place === void 0 ? void 0 : place.toString();
    var addressParam;
    var categoryId;
    if (slug) {
        addressParam = slug ? slug[slug.length - 1] : undefined;
        categoryId = cat ? cat.toString() : undefined;
    }
    console.log('Direccion params', addressParam);
    console.log('Categoria params', categoryId);
    return (<exploreContext_1.ExploreProvider placeId={placeId} addressParam={addressParam} category={categoryId}>
      <react_2.Stack isInline>
        <react_2.Box w='840px'>
          <ExploreForm_1.ExploreForm />
          <BusinessList_1.default />
        </react_2.Box>
        <react_2.Box w='55%' display={{ base: 'none', md: 'block' }}>
          <ExploreMap_1.ExploreMap />
        </react_2.Box>
      </react_2.Stack>
    </exploreContext_1.ExploreProvider>);
};
exports.default = Explore;
