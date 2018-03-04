    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const boulevards = [ 
        'Boulevards of Paris',
        'City walls of Paris',
        'Thiers wall',
        'Wall of Charles V',
        'Wall of Philip II Augustus',
        'City gates of Paris',
        'Haussmann\'s renovation of Paris',
        'Boulevards of the Marshals',
        'Boulevard Auguste-Blanqui',
        'Boulevard Barbès',
        'Boulevard Beaumarchais',
        'Boulevard de l\'Amiral-Bruix',
        'Boulevard des Capucines',
        'Boulevard de la Chapelle',
        'Boulevard de Clichy',
        'Boulevard du Crime',
        'Boulevard Haussmann',
        'Boulevard de l\'Hôpital',
        'Boulevard des Italiens',
        'Boulevard de la Madeleine',
        'Boulevard de Magenta',
        'Boulevard Montmartre',
        'Boulevard du Montparnasse',
        'Boulevard Raspail',
        'Boulevard Richard-Lenoir',
        'Boulevard de Rochechouart',
        'Boulevard Saint-Germain',
        'Boulevard Saint-Michel',
        'Boulevard de Sébastopol',
        'Boulevard de Strasbourg',
        'Boulevard du Temple',
        'Boulevard Voltaire',
        'Boulevard de la Zone']

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    console.log("All inventors born in the 1500's");

    var result =  inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
//result.forEach(i => console.log(i.first + "\n")); 
    console.table(inventors);
    
    console.log("*********************************************************************************");
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    console.log("array of the inventors' first and last names");
    var namesAndSurnames = inventors.map(inventor => (inventor.first + "," + inventor.last));
    namesAndSurnames.forEach(i => console.log(i));

    console.log("*********************************************************************************");
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    console.log("Inventors sorted by birthyear, oldest to youngest");
    var inventorsSortedByBirth = inventors.sort(function(i1, i2){
        return (i1.year - i2.year);
    });

   console.table(inventorsSortedByBirth); 
    console.log("*********************************************************************************");
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    console.log("Amount of years all inventors combined lived");
    var sumLivedYears = inventors.map(i => i.passed - i.year).reduce((acc,value) => acc + value); 
    console.log(sumLivedYears);
    
    // 5. Sort the inventors by years lived
    console.log("*********************************************************************************");
    console.log("Inventors sorted by years lived");
    inventors.sort((i1,i2) => (i1.passed - i1.year) - (i2.passed - i2.year));
    //inventors.forEach(i => console.log(i.first + "," + i.last + ":\t" + (i.passed - i.year) ));
    console.table(inventors);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    console.log("*********************************************************************************");
    console.log("Boulevards with \'de\' in name");
    var filteredBoulevards = boulevards.filter(i => i.indexOf("de") != -1); 
    filteredBoulevards.forEach(i => console.log(i));
    // 7. sort Exercise
    // Sort the people alphabetically by last name

    console.log("*********************************************************************************");
    console.log("-> People array sorted by last name");
    function retrieveLastName(a) {
        return a.split(",")[1].trim();    
    }
    function compareString(a,b){
        var aLastName = retrieveLastName(a).toUpperCase();
        var bLastName = retrieveLastName(b).toUpperCase();
        if(aLastName < bLastName)
            return -1;
        if(aLastName > bLastName)
            return 1;
        return 0;
    }

    var sortedPeople = people.sort(function(i1,i2) {
       return compareString(i1,i2);
    });
    
    console.table(sortedPeople);
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    console.log("*********************************************************************************");
    console.log("-> Summed instances");
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
//date.map(
    function calculateCharacterSum(s){
        return s.split('').map(v => v.charCodeAt(0)).reduce((acc,value) => acc + value);
    }
var sumOfInstances = data.map(v => calculateCharacterSum(v)).reduce((acc,iValue) => acc + iValue);
    console.log(sumOfInstances);

    const valueAmout = data.reduce(function(acc,vehicle){
        if(!acc[vehicle]){
            acc[vehicle] = 0;
        }
        acc[vehicle]++;
        return acc;
    }, {});

 console.log(valueAmout);
