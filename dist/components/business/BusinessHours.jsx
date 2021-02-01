"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessHours = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var formatDate_1 = require("../../utils/formatDate");
var nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
exports.BusinessHours = function (_a) {
    var hours = _a.hours;
    return (<react_2.Box>
      <react_2.Heading as="h3" size="lg" mb={4}>Horarios</react_2.Heading>
      <react_2.Stack mt={3} width='50%'>
        {hours.map(function (item) {
        if (!item.isOpen) {
            return (<react_2.Stack isInline py={1} justify='space-between' key={item.id}>
                <react_2.Text fontSize='sm'>{nameDays[item.dayOfWeek]}</react_2.Text>
                <react_2.Text fontSize='sm'>Cerrado</react_2.Text>
              </react_2.Stack>);
        }
        return (<react_2.Stack isInline py={1} justify='space-between' key={item.id}>
              <react_2.Text fontSize='sm'>{nameDays[item.dayOfWeek]}</react_2.Text>
              <react_2.Text fontSize='sm'>{formatDate_1.formatTime(item.openFrom)} - {formatDate_1.formatTime(item.openTill)}</react_2.Text>
            </react_2.Stack>);
    })}
      </react_2.Stack>
    </react_2.Box>);
};
