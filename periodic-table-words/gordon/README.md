# Periodic Table Words
**Instructions:** [https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_302_easy_spelling_with/](https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_302_easy_spelling_with/)  
**Author:** Gordon Tucker  
**Language:** Swift  
**Fastest Time:** 1.3 seconds

> Note that this was the fastest time to run through the whole dictionary

## Code
```swift
struct Chemical {
    let name: String
    let code: String
    let weight: Double
}
class ChemicalWord {
    var chemicals: [Chemical] = []
    var characters: [String] = []
    var index: Int = 0
    
    init(characters: [String]) {
        self.characters = characters
    }
    
    init(word: ChemicalWord) {
        self.chemicals = word.chemicals
        self.characters = word.characters
        self.index = word.index
    }
    
    var description: String {
        return "\(chemicals.map({ $0.code }).joined(separator: "")) (\(chemicals.map({ $0.name }).joined(separator: " ")))"
    }
    
    var weight: Double {
        return chemicals.reduce(0, { $0.0 + $0.1.weight })
    }
}
class ChemistrySpelling {
    static var chemicals: [String: Chemical] = [:]
    
    static func addChemical(_ name: String, _ code: String, _ z: String, _ weight: String, _ c: String = "") {
        chemicals[code.lowercased()] = Chemical(name: name, code: code, weight: Double(weight) ?? 0)
    }
    
    static func initializeChemicals() {
        
        addChemical("Actinium", "Ac", "89", "227", "1.1")
        addChemical("Aluminum", "Al", "13", "26.9815", "1.5")
        addChemical("Americium", "Am", "95", "243", "1.3")
        addChemical("Antimony", "Sb", "51", "121.75", "1.9")
        addChemical("Argon", "Ar", "18", "39.948")
        addChemical("Arsenic", "As", "33", "74.9216", "2.0")
        addChemical("Astatine", "At", "85", "210", "2.2")
        addChemical("Barium", "Ba", "56", "137", "0.9")
        addChemical("Berkelium", "Bk", "97", "247", "1.3")
        addChemical("Beryllium", "Be", "4", "9.0122", "1.5")
        addChemical("Bismuth", "Bi", "83", "208.980", "1.9")
        addChemical("Boron", "B", "5", "10.81", "2.0")
        addChemical("Bromine", "Br", "35", "79.904", "2.8")
        addChemical("Cadmium", "Cd", "48", "112.40", "1.7")
        addChemical("Calcium", "Ca", "20", "40.08", "1.0")
        addChemical("Californium", "Cf", "98", "251", "1.3")
        addChemical("Carbon", "C", "6", "12.011", "2.5")
        addChemical("Cerium", "Ce", "58", "140.12", "1.1")
        addChemical("Cesium", "Cs", "55", "132.9054", "0.7")
        addChemical("Chlorine", "Cl", "17", "35.453", "3.0")
        addChemical("Chromium", "Cr", "24", "51.996", "1.6")
        addChemical("Cobalt", "Co", "27", "58.9332", "1.8")
        addChemical("Copper", "Cu", "29", "63.546", "1.9")
        addChemical("Curium", "Cm", "96", "247", "1.3")
        addChemical("Dysprosium", "Dy", "66", "162.50", "1.1")
        addChemical("Einsteinium", "Es", "99", "254", "1.3")
        addChemical("Erbium", "Er", "68", "167.26", "1.1")
        addChemical("Europium", "Eu", "63", "151.96", "1.1")
        addChemical("Fermium", "Fm", "100", "257", "1.3")
        addChemical("Fluorine", "F", "9", "18.9984", "4.0")
        addChemical("Francium", "Fr", "87", "223", "0.7")
        addChemical("Gadolinium", "Gd", "64", "157.25", "1.1")
        addChemical("Gallium", "Ga", "31", "69.72", "1.6")
        addChemical("Germanium", "Ge", "32", "72.59", "1.8")
        addChemical("Gold", "Au", "79", "196.966", "2.4")
        addChemical("Hafnium", "Hf", "72", "178.49", "1.3")
        addChemical("Helium", "He", "2", "4.00260")
        addChemical("Holmium", "Ho", "67", "164.930", "1.1")
        addChemical("Hydrogen", "H", "1", "1.0079", "2.1")
        addChemical("Indium", "In", "49", "114.82", "1.7")
        addChemical("Iodine", "I", "53", "126.904", "2.5")
        addChemical("Iridium", "Ir", "77", "192.22", "2.2")
        addChemical("Iron", "Fe", "26", "55.847", "1.8")
        addChemical("Krypton", "Kr", "36", "83.80")
        addChemical("Lanthanum", "La", "57", "138.905", "1.1")
        addChemical("Lawrencium", "Lr", "103", "256")
        addChemical("Lead", "Pb", "82", "207.2", "1.8")
        addChemical("Lithium", "Li", "3", "6.941", "1.0")
        addChemical("Lutetium", "Lu", "71", "174.97", "1.2")
        addChemical("Magnesium", "Mg", "12", "24.305", "1.2")
        addChemical("Manganese", "Mn", "25", "54.9380", "1.5")
        addChemical("Mendelevium", "Md", "101", "258", "1.3")
        addChemical("Mercury", "Hg", "80", "200.59", "1.9")
        addChemical("Molybdenum", "Mo", "42", "95.94", "1.8")
        addChemical("Neodymium", "Nd", "60", "144.24", "1.1")
        addChemical("Neon", "Ne", "10", "20.179")
        addChemical("Neptunium", "Np", "93", "237.048", "1.3")
        addChemical("Nickel", "Ni", "28", "58.70", "1.8")
        addChemical("Niobium", "Nb", "41", "92.9064", "1.6")
        addChemical("Nitrogen", "N", "7", "14.0067", "3.0")
        addChemical("Nobelium", "No", "102", "255", "1.3")
        addChemical("Osmium", "Os", "76", "190.2", "2.2")
        addChemical("Oxygen", "O", "8", "15.9994", "3.5")
        addChemical("Palladium", "Pd", "46", "106.4", "2.2")
        addChemical("Phosphorus", "P", "15", "30.9738", "2.1")
        addChemical("Platinum", "Pt", "78", "195.09", "2.2")
        addChemical("Plutonium", "Pu", "94", "244", "1.3")
        addChemical("Polonium", "Po", "84", "210", "2.0")
        addChemical("Potassium", "K", "19", "39.098", "0.8")
        addChemical("Praseodymium", "Pr", "59", "140.908", "1.1")
        addChemical("Promethium", "Pm", "61", "147", "1.1")
        addChemical("Protactinium", "Pa", "91", "231.036", "1.4")
        addChemical("Radium", "Ra", "88", "226.025", "0.9")
        addChemical("Radon", "Rn", "86", "222")
        addChemical("Rhenium", "Re", "75", "186.207", "1.9")
        addChemical("Rhodium", "Rh", "45", "102.906", "2.2")
        addChemical("Rubidium", "Rb", "37", "85.4678", "0.8")
        addChemical("Ruthenium", "Ru", "44", "101.07", "2.2")
        addChemical("Rutherfordium", "Rf", "104", "261")
        addChemical("Samarium", "Sm", "62", "150.4", "1.1")
        addChemical("Scandium", "Sc", "21", "44.9559", "1.3")
        addChemical("Selenium", "Se", "34", "78.96", "2.4")
        addChemical("Silicon", "Si", "14", "28.086", "1.8")
        addChemical("Silver", "Ag", "47", "107.868", "1.9")
        addChemical("Sodium", "Na", "11", "22.9898", "0.9")
        addChemical("Strontium", "Sr", "38", "87.62", "1.0")
        addChemical("Sulfur", "S", "16", "32.06", "2.5")
        addChemical("Tantalum", "Ta", "73", "180.948", "1.5")
        addChemical("Technetium", "Tc", "43", "98.9062", "1.9")
        addChemical("Tellurium", "Te", "52", "127.60", "2.1")
        addChemical("Terbium", "Tb", "65", "158.925", "1.1")
        addChemical("Thallium", "Tl", "81", "204.37", "1.8")
        addChemical("Thorium", "Th", "90", "232.038", "1.2")
        addChemical("Thulium", "Tm", "69", "168.934", "1.1")
        addChemical("Tin", "Sn", "50", "118.69", "1.8")
        addChemical("Titanium", "Ti", "22", "47.90", "1.5")
        addChemical("Tungsten", "W", "74", "183.85", "1.7")
        addChemical("Uranium", "U", "92", "238.029", "1.5")
        addChemical("Vanadium", "V", "23", "50.9414", "1.6")
        addChemical("Xenon", "Xe", "54", "131.30", "")
        addChemical("Ytterbium", "Yb", "70", "173.04", "1.1")
        addChemical("Yttrium", "Y", "39", "88.9059", "1.2")
        addChemical("Zinc", "Zn", "30", "65.38", "1.6")
        addChemical("Zirconium", "Zr", "40", "91.22", "1.4")
    }
    
    static func run(_ words: [String]) -> [String] {
        var matches: [String] = []
        
        for word in words {
            let chemicalWords = findNextCharacter(word: ChemicalWord(characters: word.lowercased().characters.map({ String($0) })))
            
            if let foundMatch = chemicalWords.max(by: { return $0.0.weight < $0.1.weight }), foundMatch.chemicals.count > 0 {
                matches.append(foundMatch.description)
            }
        }
        
        return matches
    }
    
    static func findNextCharacter(word: ChemicalWord) -> [ChemicalWord] {
        guard word.index < word.characters.count else {
            // Indicate we are done by returning
            return [word]
        }
        
        let oneWordChemical: Chemical? = chemicals[word.characters[word.index]]
        var twoWordChemical: Chemical?
        if word.index + 1 < word.characters.count {
            // Check two digit chemicals
            twoWordChemical = chemicals["\(word.characters[word.index])\(word.characters[word.index + 1])"]
        }
        
        if let oneWordChemical = oneWordChemical {
            if let twoWordChemical = twoWordChemical {
                // We have two paths to go down
                let twoWord = ChemicalWord(word: word)
                twoWord.index += 2
                twoWord.chemicals.append(twoWordChemical)
                
                word.index += 1
                word.chemicals.append(oneWordChemical)
                
                return findNextCharacter(word: word) + findNextCharacter(word: twoWord)
            } else {
                word.index += 1
                word.chemicals.append(oneWordChemical)
                
                return findNextCharacter(word: word)
            }
        } else if let twoWordChemical = twoWordChemical {
            word.index += 2
            word.chemicals.append(twoWordChemical)
            
            return findNextCharacter(word: word)
        } else {
            return []
        }
    }
}
```