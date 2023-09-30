Search.setIndex({"docnames": ["algebra_of_sums", "assert", "choosing_editor", "data/LICENSE", "data_work", "dictionaries", "installation", "installation_on_linux", "installation_on_mac", "installation_on_windows", "intro", "lambda_functions", "license", "os_path", "path_manipulation", "pathlib", "the-problem-with-notebooks", "truthiness"], "filenames": ["algebra_of_sums.md", "assert.Rmd", "choosing_editor.md", "data/LICENSE.md", "data_work.md", "dictionaries.Rmd", "installation.md", "installation_on_linux.md", "installation_on_mac.md", "installation_on_windows.md", "intro.md", "lambda_functions.Rmd", "license.md", "os_path.Rmd", "path_manipulation.Rmd", "pathlib.Rmd", "the-problem-with-notebooks.Rmd", "truthiness.Rmd"], "titles": ["Some algebra with summation", "Using <code class=\"docutils literal notranslate\"><span class=\"pre\">assert</span></code> for testing", "Choosing an editor", "Licenses for data not otherwise specified", "The problem with data", "Dictionaries", "Installing on your computer", "Installation on Linux", "Installation on Mac", "Installation on Windows", "Data Science in Practice", "Lambda functions", "License", "Using the <code class=\"docutils literal notranslate\"><span class=\"pre\">os.path</span></code> module", "Making and breaking file paths in Python", "Using the <code class=\"docutils literal notranslate\"><span class=\"pre\">pathlib</span></code> module", "The joys and sorrows of notebooks", "Kind-of True"], "terms": {"we": [0, 1, 2, 5, 6, 8, 9, 10, 11, 13, 14, 15, 17], "us": [0, 2, 5, 6, 8, 9, 10, 11, 14, 17], "symbol": [0, 8], "sigma": 0, "sai": [0, 5, 9, 15], "have": [0, 2, 5, 6, 8, 9, 10, 11, 13, 15], "seri": 0, "four": 0, "x_1": 0, "x_2": 0, "x_3": 0, "x_4": 0, "can": [0, 2, 5, 6, 8, 9, 10, 11, 13, 14, 15, 17], "write": [0, 2, 11, 14, 15], "sigma_": 0, "i": [0, 5, 9, 13], "1": [0, 1, 6, 9, 11, 17], "4": [0, 6, 11, 12, 15], "x_i": 0, "you": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17], "thi": [0, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], "x": 0, "subscript": 0, "from": [0, 1, 2, 6, 9, 11, 13, 14, 15, 17], "through": [0, 7, 11], "so": [0, 1, 2, 6, 9, 13, 15], "when": [0, 2, 8, 11, 12, 14], "indic": 0, "ar": [0, 1, 5, 6, 8, 9, 11, 14, 15, 17], "obviou": 0, "thei": [0, 2, 5, 9, 10], "mai": [0, 8, 11], "quietli": 0, "disappear": 0, "For": [0, 2, 3, 6, 9, 11, 14, 15, 17], "exampl": [0, 2, 5, 8, 9, 11, 14, 15, 17], "over": [0, 2], "all": [0, 2, 6, 9, 13, 15], "2": [0, 1, 11, 15], "3": [0, 1, 6, 9, 11, 13, 15], "which": [0, 2, 5, 6, 8, 11, 15, 17], "case": [0, 8, 9, 11], "could": [0, 8, 11, 15], "without": [0, 2], "two": [0, 2, 11, 13, 15], "number": [0, 1, 5, 11, 15, 17], "cdot": 0, "x_n": 0, "y_1": 0, "y_2": 0, "y_n": 0, "begin": 0, "align": 0, "n": 0, "y_i": 0, "end": [0, 8, 10, 14, 15], "c": [0, 6, 9, 11, 13, 15], "A": [0, 2, 5, 9, 11, 13, 14, 17], "basic": [0, 5], "tutori": [0, 2, 13, 15], "test": [0, 7, 10, 17], "list": [0, 1, 6, 13, 17], "ident": 0, "The": [1, 2, 3, 5, 6, 8, 11, 13, 14, 15], "python": [1, 2, 5, 6, 10, 13, 15, 17], "statement": [1, 5, 11, 17], "mean": [1, 2, 8, 13, 15], "rais": 1, "an": [1, 5, 6, 11, 13, 15, 17], "error": [1, 4, 8], "unless": 1, "follow": [1, 2, 5, 6, 8, 9, 11], "express": [1, 11], "equival": 1, "true": [1, 11], "By": [1, 5, 15], "return": [1, 5, 9, 11, 15, 17], "truth": [1, 17], "valu": [1, 5, 9, 11, 15, 17], "assertionerror": 1, "fals": [1, 17], "It": [1, 2, 5, 6, 8, 9, 11, 13, 14, 15], "doe": [1, 2, 8, 11, 13, 14, 15], "noth": 1, "an_express": 1, "result": [1, 2, 11, 15, 17], "wa": [1, 2, 9], "evalu": [1, 17], "therefor": [1, 11], "do": [1, 2, 5, 9, 13, 15], "No": [1, 2, 17], "here": [1, 5, 6, 11, 15, 17], "10": [1, 6, 7, 11, 17], "0": [1, 3, 6, 11, 12, 17], "These": [1, 2, 5, 9], "traceback": 1, "most": [1, 2, 9], "recent": [1, 2], "call": [1, 2, 5, 9, 11, 15], "last": [1, 15], "cell": 1, "In": [1, 2, 5, 8, 9, 11, 13, 15], "line": [1, 6, 8, 9, 15], "11": [1, 7], "although": [1, 2], "work": [1, 2, 4, 6, 10, 11, 13, 14, 15], "more": [1, 2, 5, 13, 14, 15, 17], "gener": [1, 2, 11, 15, 17], "than": [1, 2, 13, 15, 17], "expr_result": 1, "fact": 1, "decid": [1, 2], "whether": [1, 2], "some": [1, 6, 11, 15, 17], "element": [1, 5, 17], "empti": [1, 5, 17], "5": [1, 6, 11], "ani": [1, 2, 8, 17], "other": [1, 2, 5, 10, 17], "zero": [1, 11, 17], "7": 1, "none": [1, 5, 17], "8": [1, 6, 7, 11], "singl": [2, 11], "well": 2, "should": [2, 6, 7, 8, 9], "extens": [2, 13, 15], "your": [2, 4, 7, 9, 10, 13], "hand": [2, 5, 10, 11], "make": [2, 5, 6, 10, 15], "sure": [2, 6], "configur": 2, "programm": 2, "pragmat": 2, "Being": 2, "effici": 2, "being": 2, "abl": [2, 5], "tool": [2, 6, 8, 10], "If": [2, 5, 6, 7, 8, 9, 13], "fluent": 2, "think": [2, 14], "better": [2, 8], "quickli": 2, "fewer": 2, "mistak": 2, "particularli": [2, 5, 14], "file": [2, 6, 8, 9, 13], "bear": 2, "mind": 2, "like": [2, 5, 6, 8, 9, 11, 13, 14, 15], "spend": [2, 5], "mani": [2, 8], "hundr": 2, "hour": 2, "variou": 2, "part": [2, 6], "rest": [2, 6], "career": 2, "Be": [2, 8], "care": [2, 8, 13], "choic": [2, 6], "consid": [2, 8, 11], "invest": [2, 6], "learn": [2, 6], "find": [2, 5, 6, 8, 15, 17], "yourself": [2, 15], "differ": [2, 13, 15], "task": [2, 14], "includ": [2, 6, 9], "edit": 2, "document": [2, 6, 13, 15], "strang": [2, 15], "bunch": 2, "peopl": [2, 9], "who": 2, "extrem": 2, "intoler": 2, "wast": 2, "energi": 2, "impati": 2, "serious": 2, "would": [2, 11], "notepad": 2, "veri": [2, 8], "good": [2, 6, 10], "reason": 2, "import": [2, 6, 11, 13, 14, 15], "even": 2, "fate": 2, "decis": [2, 6], "order": 2, "wise": 2, "repaid": 2, "handsom": 2, "daili": 2, "carefulli": [2, 8], "long": 2, "haul": 2, "pleas": 2, "underestim": 2, "tempt": 2, "now": [2, 3, 5, 6, 9, 11], "whichev": 2, "chanc": 2, "still": [2, 5], "few": 2, "year": [2, 11], "wrong": 2, "lost": 2, "great": [2, 6, 10], "deal": 2, "chang": [2, 6], "later": 2, "curs": 2, "free": 2, "futur": 2, "self": 2, "recrimin": 2, "deliber": 2, "There": [2, 5, 14, 15, 17], "survei": 2, "develop": [2, 10], "jetbrain": 2, "2020": 2, "though": 2, "note": 2, "maker": 2, "one": [2, 5, 6, 8, 9, 13, 15], "2021": 2, "stackoverflow": 2, "languag": 2, "discuss": [2, 13, 15], "trend": 2, "our": [2, 5, 11, 15], "own": [2, 5, 8], "experi": 2, "talk": [2, 16], "lot": [2, 14], "believ": 2, "practic": 2, "term": [2, 13], "abov": [2, 3, 8, 9, 11, 15], "posit": [2, 15], "estim": [2, 5, 11], "basi": 2, "bias": 2, "user": [2, 6, 8, 9], "below": [2, 6, 9], "integr": 2, "environ": 2, "almost": [2, 8], "entir": 2, "written": [2, 5], "microsoft": [2, 9], "download": 2, "beer": 2, "see": [2, 3, 6, 8, 9, 11, 13, 14, 15, 17], "about": [2, 6, 8, 15], "truli": 2, "open": [2, 5, 6, 8, 9], "sourc": [2, 8, 9], "freedom": 2, "popular": 2, "increasingli": 2, "power": [2, 9, 15], "featur": [2, 15], "interact": [2, 9], "experiment": 2, "jupyt": [2, 6, 15], "notebook": [2, 4, 6, 14, 15], "look": [2, 5, 6, 8, 14], "out": [2, 11, 15], "box": [2, 8], "highli": 2, "get": [2, 6, 7, 8, 9, 10, 11, 13, 15, 17], "fiddli": 2, "help": [2, 7, 8], "try": [2, 7, 9], "same": [2, 8, 9, 10, 11, 15], "thing": [2, 5, 6, 15], "onlin": 2, "controversi": 2, "vscode": 2, "short": [2, 11, 15], "releas": 2, "build": 2, "comput": [2, 9, 10, 14, 15], "instal": [2, 15], "websit": 2, "contain": [2, 9, 14, 15], "refer": [2, 15], "compon": 2, "send": 2, "telemetri": 2, "data": [2, 5, 6, 11, 15], "vscodium": 2, "site": [2, 6], "link": [2, 3, 8, 15], "less": 2, "lock": 2, "extent": 2, "commun": 2, "influenc": 2, "direct": 2, "project": 2, "drive": [2, 15], "becaus": [2, 5, 9, 11, 13, 14, 15, 17], "pai": 2, "post": 2, "those": 2, "prefer": [2, 9], "theia": 2, "much": [2, 6], "machineri": 2, "behind": 2, "known": 2, "fulli": 2, "cross": 2, "platform": [2, 6], "run": [2, 6, 7, 8, 9, 13], "further": [2, 8], "down": [2, 6, 8], "page": [2, 8, 9, 11, 13, 15], "base": [2, 15], "classic": 2, "unix": [2, 13, 15], "vi": 2, "To": [2, 5, 6, 8, 11, 13, 15], "quot": 2, "isn": 2, "t": [2, 6, 8, 11], "design": 2, "hold": 2, "its": [2, 8, 11], "must": [2, 11], "command": [2, 6, 7, 8, 9], "sever": [2, 17], "might": [2, 11], "openvim": 2, "adventur": 2, "trick": 2, "teach": [2, 6, 10], "finger": 2, "don": [2, 6, 8, 11], "budget": 2, "week": 2, "30": [2, 6], "minut": 2, "dai": 2, "start": [2, 5, 6, 8, 9, 13, 15], "feel": 2, "comfort": 2, "effort": 2, "immens": 2, "satisfi": 2, "rememb": [2, 11, 15], "s": [2, 5, 8, 11], "joke": 2, "cursor": 2, "ey": 2, "move": 2, "around": 2, "appar": 2, "thought": 2, "rel": [2, 13, 15], "complic": 2, "full": [2, 13, 15], "potenti": 2, "ask": [2, 5, 7, 14, 15], "interest": [2, 5, 6], "spent": [2, 5], "heard": 2, "know": 2, "allow": [2, 9, 11, 15], "149": 2, "initi": 2, "annual": 2, "fee": 2, "profession": 2, "support": 2, "web": [2, 6], "comparison": 2, "detail": [2, 3, 6, 11, 15], "realli": 2, "appear": 2, "trial": 2, "expir": 2, "continu": [2, 9], "author": 2, "bui": 2, "licens": [2, 15], "99": 2, "richard": 2, "stallman": 2, "wrote": 2, "origin": 2, "quicker": 2, "probabl": 2, "harder": 2, "degre": [2, 11], "place": [2, 17], "tour": 2, "research": 2, "far": 2, "enough": 2, "how": [2, 6, 9, 10], "As": [2, 15], "need": [2, 8, 9, 11, 13, 17], "keystrok": 2, "ampli": 2, "movement": 2, "hard": 2, "larg": 2, "happi": 2, "specif": 2, "wai": [2, 5, 8, 11, 13, 15], "packag": [2, 6, 8], "ha": [2, 5, 6, 8, 9, 11, 13, 15], "similar": [2, 13, 15], "interfac": [2, 6], "matlab": 2, "graphic": 2, "separ": [2, 13, 15], "plot": [2, 6], "variabl": [2, 5, 11], "onli": [2, 11, 15], "seem": 2, "recommend": [2, 6, 8, 9], "let": [2, 5, 15], "gender_data": 3, "csv": [3, 11], "matthew": 3, "brett": 3, "dataset": [3, 11], "cc": [3, 12], "BY": [3, 12], "attribut": [3, 13, 15], "world": [3, 10], "bank": 3, "mosquito_b": 3, "dr": 3, "thierri": 3, "lef\u00e8vr": 3, "rate_my_cours": 3, "clear": 3, "assum": 3, "keep": [4, 6, 8], "track": [4, 10], "analys": 4, "share": [4, 10], "avoid": [4, 13], "map": 5, "give": [5, 7, 8, 10, 11, 13, 14, 15], "relationship": 5, "between": 5, "clearer": 5, "english": 5, "premier": 5, "leagu": 5, "epl": 5, "particular": [5, 14, 15], "wage": 5, "bill": 5, "each": 5, "team": 5, "And": [5, 15], "outsid": 5, "london": 5, "suspect": 5, "expens": 5, "citi": 5, "consult": 5, "2022": [5, 6, 7], "2023": 5, "tabl": 5, "manchest": 5, "came": [5, 6], "first": [5, 6, 8, 11, 13, 15], "185": 5, "240": 5, "000": 5, "unit": 5, "third": 5, "212": 5, "135": 5, "liverpool": 5, "fifth": 5, "160": 5, "868": 5, "want": [5, 8, 9, 11, 13, 15], "store": [5, 6, 15], "correspond": 5, "name": [5, 6, 9, 11, 13, 15], "fetch": 5, "One": [5, 6, 17], "type": [5, 8, 9, 11, 13, 15], "dict": 5, "fill": 5, "enter": [5, 8, 9], "pair": 5, "form": 5, "kei": [5, 8, 9], "put": 5, "185_240_000": 5, "185240000": 5, "notic": [5, 9, 11, 13, 15], "underscor": 5, "just": [5, 8, 9, 11], "decor": 5, "easier": [5, 10], "human": 5, "read": [5, 15], "had": [5, 8], "nice": [5, 14], "where": [5, 6, 9, 11, 13, 15, 17], "delimit": 5, "thousand": 5, "million": 5, "ignor": 5, "them": [5, 10, 11, 15], "anywher": 5, "18_52_4000_0": 5, "back": 5, "longer": 5, "entri": 5, "consist": 5, "ll": [5, 8, 13], "answer": 5, "That": 5, "18524000": 5, "index": 5, "occur": 5, "squar": 5, "bracket": 5, "insid": 5, "212_135_000": 5, "160_868_000": 5, "212135000": 5, "160868000": 5, "three": [5, 6], "creat": 5, "assign": [5, 11], "also": [5, 9, 13, 14, 15], "directli": 5, "ad": [5, 11], "wages_again": 5, "syntax": 5, "left": 5, "side": 5, "curli": 5, "colon": [5, 11], "comma": 5, "close": [5, 8, 9], "go": [6, 9, 11], "major": 6, "softwar": [6, 8], "class": [6, 8, 15], "numpi": 6, "arrai": 6, "panda": [6, 11], "load": 6, "manipul": [6, 13, 15], "matplotlib": [6, 11], "standard": [6, 10, 14, 15], "scipi": [6, 9], "scientif": 6, "librari": [6, 13, 15], "statsmodel": 6, "statist": [6, 10], "model": 6, "scikit": 6, "machin": [6, 13, 15], "homework": 6, "text": [6, 8, 15], "editor": [6, 8], "choos": [6, 9], "person": 6, "time": [6, 8, 10, 13], "git": [6, 15], "version": [6, 7, 8, 9, 10], "control": [6, 10], "system": [6, 8, 13, 15], "common": 6, "problem": [6, 8, 15], "worri": 6, "re": 6, "expect": [6, 10], "solv": 6, "troubl": 6, "opportun": 6, "togeth": [6, 15], "trivial": 6, "instruct": [6, 8, 9], "mac": 6, "linux": 6, "window": [6, 8, 13, 15], "next": [6, 8, 13], "termin": [6, 9], "powershel": 6, "suggest": [6, 9], "step": [6, 8, 9], "directori": [6, 9, 13, 14], "home": [6, 8, 13, 14, 15], "cd": [6, 9], "cannot": 6, "path": [6, 8, 9, 15], "specifi": [6, 13, 15], "shell": 6, "older": [6, 8], "cmd": 6, "new": [6, 9, 10, 11, 15], "mkdir": 6, "dsip": [6, 13, 14, 15], "confirm": [6, 8], "right": [6, 8, 9, 13], "pwd": 6, "print": [6, 17], "someth": [6, 9, 13, 15], "check": [6, 7, 8], "python3": [6, 7, 8], "show": [6, 8, 9, 13, 15], "report": 6, "manag": [6, 8], "pip3": 6, "pip": [6, 7], "22": 6, "copi": [6, 8], "textbook": [6, 14], "clone": 6, "http": [6, 12, 13, 15], "github": [6, 15], "com": 6, "lisd": 6, "requir": [6, 15], "txt": [6, 13, 15], "ls": 6, "finish": 6, "r": 6, "warn": 6, "script": 6, "program": [6, 8], "appdata": [6, 9], "roam": 6, "python310": [6, 9], "final": [6, 15], "correctli": [6, 13, 15], "check_instal": [6, 15], "py": [6, 15], "mode": [6, 9, 11], "lastwritetim": 6, "length": 6, "6": [6, 11], "04": [6, 7], "am": 6, "1937": 6, "succeed": 6, "maco": [6, 8], "12": 6, "x86_64": 6, "i386": 6, "64bit": 6, "13": [6, 11], "default": [6, 11, 15], "mar": 6, "16": [6, 7], "20": [6, 7], "38": 6, "07": 6, "clang": 6, "1300": 6, "29": 6, "congratul": 6, "pass": 6, "depend": 6, "m": 6, "browser": 6, "select": [6, 8, 9], "14": [7, 11], "15": [7, 11], "bullsey": 7, "unstabl": 7, "sid": 7, "march": 7, "sudo": 7, "apt": 7, "updat": 7, "y": [7, 9], "dev": 7, "tk": 7, "instructor": 7, "21": 7, "24": 7, "34": 7, "35": 7, "dnf": 7, "devel": 7, "tkinter": 7, "bash": 7, "found": 7, "yum": 7, "again": [7, 8, 9], "prompt": [8, 9], "often": [8, 15], "dure": 8, "come": 8, "util": [8, 9], "sub": 8, "folder": 8, "applic": [8, 9], "easiest": 8, "via": [8, 9], "spotlight": 8, "either": [8, 9], "click": [8, 9], "magnifi": 8, "glass": 8, "icon": 8, "menu": [8, 9], "bar": [8, 9], "top": 8, "screen": 8, "option": [8, 9], "press": [8, 9], "spacebar": 8, "mini": 8, "invari": 8, "pin": 8, "dock": 8, "chose": [8, 9], "appl": 8, "xcode": 8, "dialog": 8, "wait": 8, "while": [8, 17], "complet": [8, 13, 15], "messag": [8, 17], "miss": 8, "seriou": 8, "actual": 8, "nearli": 8, "alwai": [8, 15], "brew": 8, "failur": 8, "did": 8, "successfulli": 8, "formula": 8, "built": 8, "symlink": 8, "usr": 8, "local": [8, 9], "bin": 8, "2to3": 8, "target": 8, "alreadi": [8, 9], "exist": 8, "remov": 8, "rm": 8, "anoth": [8, 15], "presum": 8, "associ": 8, "fix": [8, 10], "forc": 8, "overwrit": 8, "old": 8, "bash_profil": 8, "touch": 8, "textedit": 8, "scroll": 8, "add": [8, 11], "export": 8, "doesn": [8, 11], "automat": 8, "capit": 8, "correct": 8, "lower": 8, "save": 8, "main": 9, "search": 9, "ISE": 9, "Then": 9, "administr": 9, "usual": [9, 11], "normal": 9, "littl": 9, "conveni": 9, "method": [9, 10, 14, 15], "geek": 9, "second": [9, 11, 15], "chocolatei": 9, "choclat": 9, "individu": 9, "permiss": 9, "choco": 9, "mayb": 9, "set": [9, 11], "executionpolici": 9, "privileg": 9, "commandtyp": 9, "41": 9, "instead": 9, "fail": [9, 10], "forgotten": 9, "restart": 9, "after": [9, 11], "recheck": 9, "output": [9, 13], "shown": 9, "ve": 9, "seen": 9, "got": 9, "my": 9, "cp": 9, "past": 9, "code": [9, 10, 11, 13, 14], "py_path": 9, "totalcount": 9, "split": [9, 13, 15], "done": 9, "cours": [10, 12], "reproduc": 10, "analysi": 10, "deeper": 10, "understand": 10, "cover": [10, 13, 14], "intermedi": 10, "concept": 10, "relat": 10, "wider": 10, "engin": 10, "At": 10, "techniqu": [10, 14], "organ": 10, "explain": 10, "benefit": 10, "collabor": 10, "insight": 10, "rang": [10, 14], "skill": 10, "review": 10, "pd": 11, "set_opt": 11, "copy_on_writ": 11, "pyplot": 11, "plt": 11, "global": 11, "temperatur": 11, "1850": 11, "2000": 11, "read_csv": 11, "global_temperature_quart": 11, "651": 11, "1875": 11, "743": 11, "1900": 11, "971": 11, "1925": 11, "895": 11, "1950": 11, "934": 11, "1975": 11, "106": 11, "550": 11, "imagin": 11, "def": 11, "degrees_c_to_f": 11, "32": [11, 15], "__main__": 11, "50": 11, "appli": [11, 17], "56": 11, "5718": 11, "7374": 11, "57": 11, "1478": 11, "0110": 11, "0812": 11, "3908": 11, "58": 11, "dtype": 11, "float64": 11, "sometim": [11, 13, 15], "bother": 11, "whole": 11, "defin": 11, "recip": 11, "saw": 11, "block": 11, "too": 11, "attach": [11, 15], "c2f_func": 11, "befor": 11, "structur": 11, "signal": 11, "bodi": 11, "why": 11, "shortcut": 11, "convers": 11, "rather": [11, 13, 14, 15], "typic": 11, "But": 11, "celsiu": 11, "kelvin": 11, "scale": 11, "melt": 11, "point": [11, 15], "water": 11, "absolut": [11, 13, 15], "273": 11, "take": [11, 13], "account": 11, "given": 11, "convert": [11, 13, 15], "fahrenheit": 11, "multipli": 11, "involv": 11, "zero_k_in_f": 11, "459": 11, "66999999999996": 11, "441": 11, "relev": 11, "67": 11, "z": 11, "c2f_again": 11, "easili": 11, "accept": 11, "materi": 12, "under": 12, "avail": 12, "creativecommon": 12, "org": [12, 13, 15], "pathlib": [13, 14], "altern": [13, 15], "approach": [13, 15], "primari": [13, 15], "doc": [13, 15], "html": [13, 15], "dirnam": 13, "basenam": 13, "join": [13, 15], "splitext": 13, "abspath": 13, "ipython": [13, 15], "tab": [13, 15], "function": [13, 14, 15], "shorten": 13, "op": 13, "posixpath": [13, 15], "p": [13, 15], "On": [13, 15], "then_filenam": [13, 15], "doubl": 13, "backslash": 13, "string": [13, 14, 15, 17], "escap": 13, "charact": [13, 15], "exactli": [13, 15], "ye": 13, "current": [13, 15], "root": 13, "filenam": [13, 15], "forward": 13, "slash": 13, "what": [13, 15], "getcwd": [13, 14], "runner": [13, 14, 15], "identifi": [14, 15], "filesystem": [14, 15], "os": [14, 15], "modul": 14, "Of": 14, "simpler": 14, "smaller": 14, "verbos": 14, "concis": 14, "reli": 14, "both": 14, "modern": 14, "up": 14, "experienc": 14, "object": 15, "repres": 15, "pathnam": 15, "tell": 15, "locat": 15, "disk": 15, "abs_p": 15, "front": 15, "simpl": 15, "str": 15, "anyth": 15, "parent": 15, "a_path": 15, "rel_path": 15, "clever": 15, "overrid": 15, "divis": 15, "oper": 15, "remind": 15, "overload": 15, "addit": 15, "arithmet": 15, "concaten": 15, "stick": 15, "firstsecond": 15, "fragment": 15, "suffix": 15, "replac": 15, "with_suffix": 15, "md": 15, "raw": 15, "byte": 15, "new_path": 15, "a_test_fil": 15, "write_text": 15, "a_multiline_str": 15, "read_text": 15, "nmore": 15, "nlast": 15, "similarli": 15, "write_byt": 15, "read_byt": 15, "splitlin": 15, "cwd": 15, "os_path": 15, "rmd": 15, "_build": 15, "installation_on_mac": 15, "gitignor": 15, "dictionari": 15, "imag": 15, "makefil": 15, "choosing_editor": 15, "_toc": 15, "yml": 15, "installation_on_window": 15, "lambda_funct": 15, "readm": 15, "data_work": 15, "intro": 15, "_cours": 15, "truthi": [15, 17], "_config": 15, "installation_on_linux": 15, "assert": [15, 17], "algebra_of_sum": 15, "build_requir": 15, "path_manipul": 15, "bib": 15, "argument": 15, "match": 15, "until": 15, "0x7f560c8b6740": 15, "tidi": 15, "unlink": 15, "temporari": 15, "were": 15, "effect": 15, "joel": 16, "gru": 16, "simpli": 17, "val": 17, "claus": 17, "algorithm": 17, "another_v": 17, "bool": 17, "situat": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"some": [0, 2], "algebra": 0, "summat": 0, "sum": 0, "addit": 0, "insid": 0, "multipli": 0, "constant": 0, "valu": 0, "more": [0, 11], "read": 0, "us": [1, 13, 15], "assert": 1, "test": 1, "choos": 2, "an": 2, "editor": 2, "take": 2, "time": 2, "what": 2, "ar": 2, "option": 2, "version": 2, "visual": 2, "studio": 2, "code": 2, "vim": 2, "pycharm": 2, "sublim": 2, "text": 2, "emac": 2, "spyder": 2, "anoth": 2, "window": [2, 9], "suggest": 2, "licens": [3, 12], "data": [3, 4, 10], "otherwis": [3, 12], "specifi": [3, 12], "The": [4, 9, 16], "problem": 4, "dictionari": 5, "instal": [6, 7, 8, 9], "your": [6, 8], "comput": 6, "linux": 7, "python": [7, 8, 9, 14], "3": 7, "git": [7, 8, 9], "atom": 7, "On": 7, "ubuntu": 7, "debian": 7, "fedora": 7, "mac": 8, "termin": 8, "app": 8, "homebrew": 8, "set": 8, "up": 8, "powershel": 9, "10": 9, "11": 9, "chocalatei": 9, "copi": 9, "ex": 9, "python3": 9, "long": 9, "hand": 9, "wai": [9, 14], "short": 9, "check": 9, "To": 9, "finish": 9, "scienc": 10, "practic": 10, "lambda": 11, "function": 11, "than": 11, "one": 11, "argument": 11, "Not": 12, "os": 13, "path": [13, 14], "modul": [13, 15], "make": 14, "break": 14, "file": [14, 15], "pathnam": 14, "two": 14, "manipul": 14, "pathlib": 15, "list": 15, "directori": 15, "select": 15, "glob": 15, "around": 15, "output": 15, "delet": 15, "joi": 16, "sorrow": 16, "notebook": 16, "kind": 17, "true": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})