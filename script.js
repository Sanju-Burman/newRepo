// Sample data
let users = [];
let roles = [];

document.getElementById('addUserForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userRole = document.getElementById('userRole').value;
    const userId = users.length + 1;
    users.push({ id: userId, name: userName, role: userRole });
    closeModal('addUserModal');
    renderTables();
});

document.getElementById('addRoleForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const roleName = document.getElementById('roleName').value;
    const roleId = roles.length + 1;
    roles.push({ id: roleId, name: roleName });
    closeModal('addRoleModal');
    renderTables();
});

function renderTables() {
    const userTable = document.getElementById('user-table');
    userTable.innerHTML = '';
    users.forEach(user => {
        userTable.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td><button onclick="editUser(${user.id})">Edit</button> <button onclick="deleteUser(${user.id})">Delete</button></td>
        </tr>`;
    });

    const roleTable = document.getElementById('role-table');
    roleTable.innerHTML = '';
    roles.forEach(role => {
        roleTable.innerHTML += `<tr>
            <td>${role.id}</td>
            <td>${role.name}</td>
            <td><button onclick="editRole(${role.id})">Edit</button> <button onclick="deleteRole(${role.id})">Delete</button></td>
        </tr>`;
    });
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function editUser(userId) {
    // Add your edit user logic here
    alert(`Edit user with ID ${userId}`);
}

function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
    renderTables();
}

function editRole(roleId) {
    // Add your edit role logic here
    alert(`Edit role with ID ${roleId}`);
}

function deleteRole(roleId) {
    roles = roles.filter(role => role.id !== roleId);
    renderTables();
}

// Initial render
renderTables();
