
$( ()=> { // when the page is done loading
        // count of pop out my image
        let flag1 = 0
        let flag2 = 0
        let flag3 = 0
        let flag4 = 0
        // bootstrap
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        $('#oscar').hide();
        $('.carousel').carousel();
        $('.checkpoint.1').click(() => {
            $('.checkpoint.1').text('已閱!');
            $(".checkpoint.1").css("background-color","#C8377B");
            flag1=1;
            console.log("Clicked Interest");
            if ((flag1+flag2+flag3+flag4)==4) { 
                {console.log("Finish");
                $('#oscar').show();
                $('#description').hide();}
            };
        });

        $('.checkpoint.2').click(() => {
            $('.checkpoint.2').text('已閱!');
            $(".checkpoint.2").css("background-color","#C8377B");
            flag2=1;
            console.log("Clicked Background");
            if ((flag1+flag2+flag3+flag4)==4) { 
                {console.log("Finish");
                $('#oscar').show();
                $('#description').hide();}
            };
        });

        $('.checkpoint.3').click(() => {
            $('.checkpoint.3').text('已閱!');
            $(".checkpoint.3").css("background-color","#C8377B");
            flag3=1;
            console.log("Clicked Career");
            if ((flag1+flag2+flag3+flag4)==4) { 
                {console.log("Finish");
                $('#oscar').show();
                $('#description').hide();}
            };
        });

        $('.checkpoint.4').click(() => {
            $('.checkpoint.4').text('已閱!');
            $(".checkpoint.4").css("background-color","#C8377B");
            flag4=1;
            console.log("Clicked Project");
            if ((flag1+flag2+flag3+flag4)==4) { 
                {console.log("Finish");
                $('#oscar').show();
                $('#description').hide();}
            };
        });
    });

