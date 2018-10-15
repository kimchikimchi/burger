// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready( function() {
    $(".form-inline").on("submit", function(event) {
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

    // Using event delegation since ".btn" can be created after page rendering.
    $("#uneatenBurgers").on("click", ".eat-burger", function(event) {
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
