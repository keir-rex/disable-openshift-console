(function () {
    OPENSHIFT_CONSTANTS.DISABLE_SERVICE_CATALOG_LANDING_PAGE = true;
    _.remove(window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION, { label: 'Catalog' });
}());
