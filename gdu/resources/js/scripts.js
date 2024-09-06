document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('user-form');
    const userList = document.getElementById('user-list');
    const userIdInput = document.getElementById('user-id');
    
    function fetchUsers() {
        fetch('/api/users')
            .then(response => response.json())
            .then(users => {
                userList.innerHTML = users.map(user => `
                    <li>
                        ${user.name} (${user.email})
                        <button onclick="editUser(${user.id})">Edit</button>
                        <button onclick="deleteUser(${user.id})">Delete</button>
                    </li>
                `).join('');
            });
    }

    window.editUser = function(id) {
        fetch(`/api/users/${id}`)
            .then(response => response.json())
            .then(user => {
                userIdInput.value = user.id;
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
            });
    }

    window.deleteUser = function(id) {
        fetch(`/api/users/${id}`, { method: 'DELETE' })
            .then(() => fetchUsers());
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const userId = userIdInput.value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const method = userId ? 'PUT' : 'POST';
        const url = userId ? `/api/users/${userId}` : '/api/users';
        const body = JSON.stringify({ name, email, password: password ? password : undefined });

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
            .then(() => {
                fetchUsers();
                form.reset();
                userIdInput.value = '';
            });
    });

    fetchUsers();
});
