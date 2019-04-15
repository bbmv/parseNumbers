describe("LoaderUtils", function() {

    var parseNumbers = LoaderUtils.parseNumbers;

    var AMOUNT = 50000;

    //------------------------------------------
    describe("parseNumbers()", function() {

    it("It parses a generated text. The text contains floats and spaces", function() {

        var text = generateText( AMOUNT, true, " ", 3 );

        var floatsArray = parseNumbers( text );

        var amount = floatsArray.length;

        assert.equal( amount, AMOUNT );

    });

    //----------------------------------------
    it("It parses a generated text. The text contains integers and spaces", function() {

        var text = generateText( AMOUNT, false, " ", 3 );

        var floatsArray = parseNumbers( text );

        var amount = floatsArray.length;

        assert.equal( amount, AMOUNT );

    });

    //----------------------------------------
    it("It parses a generated text. The text contains floats, spaces and tabs", function() {

        var text = generateText( AMOUNT, true, "\t", 3 );

        var floatsArray = parseNumbers( text );

        var amount = floatsArray.length;

        assert.equal( amount, AMOUNT );

    });

    //----------------------------------------
    it("It parses a generated text. The text contains floats, spaces and line feeds", function() {

        var text = generateText( AMOUNT, true, "\n", 3 );

        var floatsArray = parseNumbers(text);

        var amount = floatsArray.length;

        assert.equal( amount, AMOUNT );

    });

    //----------------------------------------
    it("It parses a generated text. The text contains floats, spaces and carriage returns", function() {

        var text = generateText( AMOUNT, true, "\r", 3 );

        var floatsArray = parseNumbers( text );

        var amount = floatsArray.length;

        assert.equal( amount, AMOUNT );

    });
    //----------------------------------------

    });
});

// -----------------------------------------------------------------
function generateText( amount, isFloat, character, each ) {

    var text = "";

    amount = ( amount !== undefined ) ? amount : 50000;
    isFloat = ( isFloat !== undefined ) ?  isFloat : true;
    character = ( character !== undefined ) ?  character : " ";
    each = ( each !== undefined ) ? each : 1;

    for( let i=0; i<amount; i++ ) {

        var whiteSpace = ( ( i % each ) === 0 ) ? character : " ";
        var randomNumber = Math.random();
        var number = ( isFloat ) ? randomNumber : Math.round( randomNumber * 100000 );

        text += number + whiteSpace;
    }

    return text;
}
