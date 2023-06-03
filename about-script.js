import membersData from './membersData';

document.addEventListener('DOMContentLoaded', () => {
  const membersList = document.getElementById('membersList');
  const memberDetails = document.getElementById('memberDetails');
  const memberImage = document.getElementById('memberImage');
  const memberName = document.getElementById('memberName');
  const memberBio = document.getElementById('memberBio');

  // Render members list
  membersData.forEach((member) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#member${member.id}`;
    link.textContent = member.name;
    listItem.appendChild(link);
    membersList.appendChild(listItem);
  });

  // Show member details on click
  membersList.addEventListener('click', (event) => {
    event.preventDefault();
    const memberId = event.target.getAttribute('href').substring(1); // Remove the leading '#'
    const selectedMember = membersData.find((member) => `member${member.id}` === memberId);
    
    // Update member details
    memberImage.src = selectedMember.image;
    memberName.textContent = selectedMember.name;
    memberBio.textContent = selectedMember.bio;
    
    // Show selected member details and hide others
    membersData.forEach((member) => {
      const memberElement = document.getElementById(`member${member.id}`);
      memberElement.style.display = member.id === selectedMember.id ? 'block' : 'none';
    });
  });

  // Show the first member by default
  if (membersData.length > 0) {
    const firstMember = membersData[0];
    memberImage.src = firstMember.image;
    memberName.textContent = firstMember.name;
    memberBio.textContent = firstMember.bio;
    document.getElementById('member1').style.display = 'block';
  }
});
