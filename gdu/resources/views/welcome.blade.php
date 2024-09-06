<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
    <div class="container">
        <h1>User Management</h1>
        <form id="user-form">
            <input type="hidden" id="user-id">
            <input type="text" id="name" placeholder="Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password">
            <button type="submit">Save</button>
        </form>
        <ul id="user-list"></ul>
    </div>
    <script src="{{ asset('js/scripts.js') }}"></script>
</body>
</html>
