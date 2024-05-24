document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");
  
    teamMembers.forEach(member => {
      const summary = member.querySelector(".summary");
  
      member.addEventListener("click", function() {
        if (summary.style.display === "none") {``
          summary.style.display = "block";
        } else {
          summary.style.display = "none";
        }
      });
  
      member.addEventListener("mouseover", function() {
        member.style.opacity = "0.7";
      });
  
      member.addEventListener("mouseout", function() {
        member.style.opacity = "1";
      });
    });
  });
  