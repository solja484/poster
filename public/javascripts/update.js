let blogs = [];

const makeRequest = () => {
    $.ajax({
        url: "/posts",
        method: "GET",
        success: function (result) {
            if (JSON.stringify(blogs) !== JSON.stringify(result.blogs)) {
                blogs = result.blogs;
                const $blogs = $('#blogs');
                $blogs.empty();

                $.each(blogs, (index, blog) => {
                    $blogs.prepend(
                        '<div class="panel panel-info">' +
                        `<div class="panel-heading">${blog['header']}</div>` +
                        `<div class="panel-body"> ${blog['body']}</div>` +
                        `<div class="panel-footer"> ${blog['date']}</div></div>`
                    )
                })
            }

        }
    });
};
makeRequest();
setInterval(makeRequest, 5000);


