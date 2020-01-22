
$( ()=> { // when the page is done loading
        // count of pop out my image
        var flags = [0, 0, 0, 0]
        // bootstrap
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        $('#oscar').hide();
        $('.carousel').carousel();

        for (let i = 1; i<5; i++) {
            $(`.checkpoint.${i}`).click(() => {
                $(`.checkpoint.${i}`).text('Clicked!');
                $(`.checkpoint.${i}`).css("background-color","#C8377B");
                flags[i-1] = 1;
                console.log(`Clicked ${i}`);
                if (eval(flags.join('+'))==4) { 
                    {console.log("Finish");
                    $('#oscar').show();
                    $('#description').hide();}
                };
            });
        };
    });

