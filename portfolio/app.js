function showProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);

    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
    } else {
        projectDetails.style.display = 'none';
    }
}
;
