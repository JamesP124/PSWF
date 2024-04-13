<!-- Include this script tag in your HTML to fetch data from the backend -->
<script>
    async function fetchTeamRecords() {
        try {
            const response = await fetch('https://www.nfl.com'); // Update this URL to match your backend setup
            const data = await response.json();

            updateTeamRecords(data);
        } catch (error) {
            console.error('Error fetching team records:', error);
        }
    }

    async function updateTeamRecords(newData) {
        try {
            const response = await fetch('https://www.nfl.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error updating team records:', error);
        }
    }

    // Fetch team records when the page loads
    window.onload = function () {
        fetchTeamRecords();

        // Fetch team records periodically (e.g., every 5 minutes)
        setInterval(fetchTeamRecords, 300000); // 300000 milliseconds = 5 minutes
    };
</script>
