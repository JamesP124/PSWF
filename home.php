<?php
// Place any PHP logic here if needed
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Philadelphia Sports History</title>
    <style>
        /* Add CSS for the fade-in effect */
        .fade-in {
            opacity: 2;
            transition: opacity 2s ease-in-out;
        }

        /* Adjust the size of the images */
        /*.Images img {
            width: 500px;
            height: auto;
        }*/

        /* Adjust the size of the Eagles image */
        .event img {
            width: 300px; /* Set your preferred width */
            height: auto; /* Maintain aspect ratio */
        }

        /* Adjust the height of the timeline container */
        .timeline-container {
            max-height: 450px; /* Set your preferred height */
            overflow: hidden;
        }

        /* Adjust the styles to crop to the image size at the bottom with a subtle grid */
        .timeline {
            position: relative;
        }

        .timeline:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px; /* Adjust this value as needed */
            background: repeating-linear-gradient(45deg, transparent, transparent 5px, #ccc 5px, #ccc 10px);
        }

        /* Additional styles for the image and text */
        .image-text {
            margin-top: 20px;
        }

        /* Add CSS for the timeline line */
        .line {
            position: absolute;
            width: 2px;
            height: 100%;
            background: #ccc;
            left: 50%;
        }

        /* Style adjustments for better readability */
        header {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
        }

        header nav a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
        }

        .top-bar-info {
            background-color: #f2f2f2;
            padding: 10px;
            text-align: center;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

<body>

<header>
    <h1>Philadelphia Sports History</h1>
    <nav>
        <a href="eagles.html">Eagles</a>
        <a href="76.html">76ers</a>
        <a href="phillies.html">Phillies</a>
        <a href="flyers.html">Flyers</a>
        <a href="philadelphia-union.html">Philadelphia Union</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact Us</a>
        <a href="login.html">Login/Signup</a>
    </nav>
</header>

<div class="top-bar-info">
    <p>“The problem with Philadelphia fans is that they want you to play every game like it's your last one.” - Shawn Bradley</p>
</div>

<div class="timeline-container">
    <div class="timeline">
        <div class="line"></div> <!-- Added this line for the timeline -->

        <!-- Example timeline events with adjusted size for the Eagles image -->
        <section class="event" style="top: 5%;">
            <h3>1948</h3>
            <p>Eagles win NFL Superbowl</p>
            <img src="https://goldenrankings.com/Football%20Pictures%202/NFL%20Championship%20Games/1948EaglesCardinals/1948%20Eagles.jpg" alt="Philadelphia Eagles winning NFL Championship in 1948">
        </section>
        <section class="event" style="top: 25%;">
            <h3>1949</h3>
            <p>Eagles win NFL Superbowl</p>
            <img src="https://goldenrankings.com/Football%20Pictures%202/NFL%20Championship%20Games/1949EaglesRams/1949%20NFL%20champion%20eagles.jpg" alt="Philadelphia Eagles winning NFL Championship in 1949">
        </section>
        <section class="event" style="top: 45%;">
            <h3>1955</h3>
            <p>76ers NBA Championship Win</p>
            <img src="https://cdn.nba.com/manage/2021/08/1954-55-syracuse-nationals.jpg" alt="76ers NBA Championship Win 1955">
        </section>
        <section class="event" style="top: 65%;">
            <h3>1960</h3>
            <p>Eagles win NFL Superbowl</p>
            <img src="https://m.media-amazon.com/images/I/51pGHOyGGuL._AC_UF1000,1000_QL80_.jpg" alt="Philadelphia Eagles winning NFL Championship in 1960">
        </section>
        <section class="event" style="top: 85%;">
            <h3>1967</h3>
            <p>76ers NBA Championship Win</p>
            <img src="https://nbahoopsonline.com/teams/Philadelphia76ers/photos/196776ers.jpg" alt="76ers NBA Championship Win 1967">
        </section>
        <!-- Add more sections for other events -->

    </div>
</div>

<footer>
    <p>&copy; James Pargamanik, Meru Parmar, Rob Workman</p>
</footer>

</body>

</html>
