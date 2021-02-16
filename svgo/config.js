module.exports = {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2,
  },
  plugins: [
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeXMLNS: false },
    { removeEditorsNSData: true },
    { cleanupAttrs: true },
    { inlineStyles: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { cleanupIDs: true },
    { prefixIds: false },
    { removeRasterImages: false },
    { removeUselessDefs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: false },
    { convertColors: true },
    { removeUnknownsAndDefaults: false },
    /*
      We want to remove useless parts of SVG,
      but to leave `fill="none"` & `stroke="none"`.
      For this purpose we use here a custom version of `removeUnknownsAndDefaults`.
     */
    { removeUnknownsAndDefaultsMod: require('./removeUnknownsAndDefaults') },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: false },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { convertShapeToPath: true },
    { convertEllipseToCircle: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeEmptyAttrs: true },
    { removeEmptyContainers: true },
    { mergePaths: true },
    { removeUnusedNS: true },
    { sortAttrs: true },
    { sortDefsChildren: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeDimensions: false },
    { removeAttrs: false },
    { removeAttributesBySelector: false },
    { removeElementsByAttr: false },
    { addClassesToSVGElement: false },
    { removeStyleElement: false },
    { removeScriptElement: false },
    { addAttributesToSVGElement: false },
    { removeOffCanvasPaths: false },
    { reusePaths: false },
  ],
};