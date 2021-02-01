"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessItem = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var link_1 = __importDefault(require("next/link"));
var ai_1 = require("react-icons/ai");
var generateName_1 = require("../../utils/generateName");
exports.BusinessItem = function (_a) {
    var _b, _c;
    var business = _a.business;
    return (<link_1.default href={"/b/" + generateName_1.generateName(business.name) + "/" + business.id} passHref>
      <react_2.Link _hover={{ textDecor: 'none' }}>
        <react_2.Box mb={3} py={2} pl={2} w='100%' _hover={{ bg: 'primaryLight', cursor: 'pointer' }}>
          <react_2.Stack isInline justify='flex-start' align='center'>
            <react_2.Image borderRadius="md" src={business.cover} boxSize='120px' w='180px' objectFit="cover" fallback={<react_2.Progress />} loading='lazy'/>
            <react_2.Box pl={3}>
              <react_2.Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {business.name}
              </react_2.Text>
              <react_2.Text my={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="primary">
              {(_b = business.businessCategory) === null || _b === void 0 ? void 0 : _b.name}
              </react_2.Text>
              <react_2.Text fontSize="xs" color='grey'>{(_c = business.businessAddress) === null || _c === void 0 ? void 0 : _c.addressMap}</react_2.Text>
              <react_2.HStack pt={2} spacing={1}>
                <ai_1.AiFillStar color='gold'/>
                <ai_1.AiFillStar color='gold'/>
                <ai_1.AiFillStar color='gold'/>
                <ai_1.AiFillStar color='gold'/>
                <ai_1.AiFillStar color='gold'/>
              </react_2.HStack>
            </react_2.Box>
          </react_2.Stack>
        </react_2.Box>
      </react_2.Link>
    </link_1.default>);
};
