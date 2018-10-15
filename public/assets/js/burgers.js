// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready( function() {
    $(".change-sleep").on("click", function(event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: $(this).data('devoured') }
        }).then(
            function() {
                console.log("changed sleep to", data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: { burger_name: $("#burger").val().trim() }
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#uneatenBurgers").on("click", ".btn", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("updating devoured status for id " + id);

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function() {
                location.reload();
            }
        );
    });
});
