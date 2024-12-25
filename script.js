// Function to show departments
function showDepartments() {
    document.getElementById('department-section').style.display = 'block';
    document.getElementById('lecturer-section').style.display = 'none';
    document.getElementById('lecturer-details').style.display = 'none';
}

// Function to show lecturers based on the selected department
function showLecturers(department) {
    const lecturers = {
        cs: [
            {name: 'RIYA', photo: 'https://thumbs.dreamstime.com/b/cartoon-female-teacher-standing-book-d-cartoon-style-illustration-female-teacher-standing-book-isolated-white-288590980.jpg', cabin: 'CV RAMAN Block ,3rd floor,SR-34'},
            {name: 'SIYA', photo: 'https://web-assets.limewire.media/u/ca378a0d-1fed-477d-9f2b-1c5a8453e727/e8239625-da36-4ee1-9137-59924e55e3fa.d/post_image_large.jpeg', cabin: 'APJ Block,2nd floor ,SR-22'}
            // Add more lecturers as needed
        ],
        math: [
            {name: 'RAHUL', photo: 'https://png.pngtree.com/png-vector/20231017/ourlarge/pngtree-3d-employee-video-chat-png-image_10199491.png', cabin: 'RAMANUJAN Block,4th floor,SR 5'},
            {name: 'ROHITH', photo:'https://png.pngtree.com/png-vector/20240205/ourlarge/pngtree-a-happy-middle-aged-man-with-smile-png-image_11717481.png', cabin: 'RAMANUJAN Block,2ND floor,SR 8'}
            // Add more lecturers as needed
        ],
        physics: [
            {name: 'ROHAN', photo: 'https://png.pngtree.com/png-vector/20231208/ourlarge/pngtree-playful-3d-student-boy-gesturing-on-white-background-png-image_11172919.png', cabin: 'CV RAMAN Block ,2Nd floor,SR-12'},
            {name: 'PRIYA', photo: 'https://img.freepik.com/premium-photo/3d-character-business-woman_935410-577.jpg?w=2000', cabin: 'Atal block,1st floor, SR 10'}
            // Add more lecturers as needed
        ]
    };
    
    const lecturerList = document.getElementById('lecturers');
    lecturerList.innerHTML = '';

    lecturers[department].forEach(lecturer => {
        const li = document.createElement('li');
        li.textContent = lecturer.name;
        li.onclick = () => showLecturerDetails(lecturer);
        lecturerList.appendChild(li);
    });

    document.getElementById('lecturer-section').style.display = 'block';
    document.getElementById('lecturer-details').style.display = 'none';
}
function searchLecturer() 
{ 
    const query = document.getElementById('searchInput').value.toLowerCase(); 
    const allLecturers = {
         cs: [ {name: 'RIYA', photo: 'https://thumbs.dreamstime.com/b/cartoon-female-teacher-standing-book-d-cartoon-style-illustration-female-teacher-standing-book-isolated-white-288590980.jpg', cabin: 'CV RAMAN Block ,3rd floor,SR-34'},
         {name: 'SIYA', photo: 'https://web-assets.limewire.media/u/ca378a0d-1fed-477d-9f2b-1c5a8453e727/e8239625-da36-4ee1-9137-59924e55e3fa.d/post_image_large.jpeg', cabin: 'APJ Block,2nd floor ,SR-22'} 
         // Add more lecturers as needed
          ],
          math: [ {name: 'RAHUL', photo: 'https://png.pngtree.com/png-vector/20231017/ourlarge/pngtree-3d-employee-video-chat-png-image_10199491.png', cabin: 'RAMANUJAN Block,4th floor,SR 5'},
             {name: 'ROHITH', photo:'https://png.pngtree.com/png-vector/20240205/ourlarge/pngtree-a-happy-middle-aged-man-with-smile-png-image_11717481.png', cabin: 'RAMANUJAN Block,2ND floor,SR 8'}
              // Add more lecturers as needed 
              ],
               physics: [
                 {name: 'ROHAN', photo: 'https://png.pngtree.com/png-vector/20231208/ourlarge/pngtree-playful-3d-student-boy-gesturing-on-white-background-png-image_11172919.png', cabin: 'CV RAMAN Block ,2Nd floor,SR-12'}, 
                 {name: 'PRIYA', photo: 'https://img.freepik.com/premium-photo/3d-character-business-woman_935410-577.jpg?w=2000', cabin: 'Atal block,1st floor, SR 10'}
                  // Add more lecturers as needed 
                  ] };
                   const matchingLecturers = [];
                    for (const department in allLecturers) { const lecturers = allLecturers[department];
                         lecturers.forEach(lecturer => { if (lecturer.name.toLowerCase().includes(query))
                             { matchingLecturers.push(lecturer); } }); } displaySearchResults(matchingLecturers); 
                            } function displaySearchResults(lecturers) { const resultsDiv = document.getElementById('results');
                                 resultsDiv.innerHTML = '';
                                  // Clear previous results 
                                  lecturers.forEach(lecturer =>
                                     { const lecturerDiv = document.createElement('div'); 
                                        lecturerDiv.className = 'lecturer-result';
                                         lecturerDiv.innerHTML = ` <p> Name: ${lecturer.name}
                                         </p> <p>  Cabin: ${lecturer.cabin}</p>
                                          <img src="${lecturer.photo}" alt="Photo of ${lecturer.name}"> `; 
                                          resultsDiv.appendChild(lecturerDiv);
                                         }); 
                                         if (lecturers.length === 0) { resultsDiv.innerHTML = '<p>No matching lecturers found.</p>'; } }

// Function to show lecturer details
function showLecturerDetails(lecturer) {
    document.getElementById('lecturer-photo').src = lecturer.photo;
    document.getElementById('lecturer-name').textContent = `Name: ${lecturer.name}`;
    document.getElementById('lecturer-cabin').textContent = `Cabin: ${lecturer.cabin}`;

    document.getElementById('lecturer-details').style.display = 'block';
}
