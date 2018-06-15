exception MissingFilename;

let loadFile = filename =>
  Node.Fs.readFileAsUtf8Sync(filename) |> Js.String.split("\n");

let inputFile =
  switch (Node.Process.argv) {
  | [|_, _, filename|] => filename
  | _ => raise(MissingFilename)
  };

let dictionary = loadFile("../../assets/enable1.txt");
let input =
  loadFile(inputFile)
  |> Array.to_list
  |> List.map(x => String.trim(x))
  |> List.filter(x => String.length(x) > 0)
  |> Array.of_list;

input
|> Array.iter(word => {
     let max = ref(0);
     dictionary
     |> Array.iter(x => {
          let length =
            String.length(word) > String.length(x) ?
              String.length(x) - 1 : String.length(word) - 1;
          let currentMax = max^;
          for (i in currentMax + 1 to length) {
            if (String.sub(x, 0, i) === String.sub(word, 0, i)) {
              max := i;
            };
          };
        });
     Js.log(
       switch (max^) {
       | 0 => word
       | _ =>
         String.sub(word, 0, max^)
         ++ "<"
         ++ String.sub(word, max^, String.length(word) - max^)
       },
     );
   });
