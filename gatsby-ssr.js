const uuid = require("react-uuid");
const React = require("react");

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<script key={uuid()} src="/js/index.js" defer/>]);
};
