var memberBio = document.querySelector('.member-bio');
memberBio.innerHTML = `
    <h3>${memberDetails[memberIndex].name}</h3>
    <img src="${memberDetails[memberIndex].image}" alt="${memberDetails[memberIndex].name}">
    <p>${memberDetails[memberIndex].bio}</p>
`;
