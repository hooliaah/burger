// attach our handlers when the DOM is fully loaded
$(function () {
    // function to change "devoured" state from false to true
    $(".devour-button").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");
        var nowDevoured = {
            devoured: devour
        };

        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(
            function () {
                // reload the page to get the updated list
                location.reload();
            }
        );
    });

    // function to add new burger to list of burgers that can be devoured
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        // send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // reload the page to get the updated list
                location.reload();
            }
        );
    });
});
