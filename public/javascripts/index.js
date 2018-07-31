$("#input-h2").fileinput({
    showUpload: false,
    dropZoneEnabled: false,
    maxFileCount: 10,
    mainClass: "input-group-lg",
    allowedFileExtensions: ["java"],
    uploadUrl: '/files'
});