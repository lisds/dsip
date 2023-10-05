Search.setIndex({"docnames": ["algebra_of_sums", "arrays_and_images", "assert", "choosing_editor", "data/LICENSE", "data_work", "dictionaries", "installation", "installation_on_linux", "installation_on_mac", "installation_on_windows", "intro", "lambda_functions", "license", "lin_regression_notation", "os_path", "path_manipulation", "pathlib", "the-problem-with-notebooks", "truthiness"], "filenames": ["algebra_of_sums.md", "arrays_and_images.Rmd", "assert.Rmd", "choosing_editor.md", "data/LICENSE.md", "data_work.md", "dictionaries.Rmd", "installation.md", "installation_on_linux.md", "installation_on_mac.md", "installation_on_windows.md", "intro.md", "lambda_functions.Rmd", "license.md", "lin_regression_notation.Rmd", "os_path.Rmd", "path_manipulation.Rmd", "pathlib.Rmd", "the-problem-with-notebooks.Rmd", "truthiness.Rmd"], "titles": ["Some algebra with summation", "Arrays as images, images as arrays", "Using <code class=\"docutils literal notranslate\"><span class=\"pre\">assert</span></code> for testing", "Choosing an editor", "Licenses for data not otherwise specified", "The problem with data", "Dictionaries", "Installing on your computer", "Installation on Linux", "Installation on Mac", "Installation on Windows", "Data Science in Practice", "Lambda functions", "License", "Notation for linear regression models", "Using the <code class=\"docutils literal notranslate\"><span class=\"pre\">os.path</span></code> module", "Making and breaking file paths in Python", "Using the <code class=\"docutils literal notranslate\"><span class=\"pre\">pathlib</span></code> module", "The joys and sorrows of notebooks", "Kind-of True"], "terms": {"we": [0, 1, 2, 3, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 19], "us": [0, 1, 3, 6, 7, 9, 10, 11, 12, 14, 16, 19], "symbol": [0, 9, 14], "sigma": 0, "sai": [0, 6, 10, 14, 17], "have": [0, 1, 3, 6, 7, 9, 10, 11, 12, 14, 15, 17], "seri": 0, "four": [0, 1], "x_1": [0, 14], "x_2": [0, 14], "x_3": [0, 14], "x_4": 0, "can": [0, 1, 3, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 19], "write": [0, 3, 12, 14, 16, 17], "sigma_": 0, "i": [0, 1, 6, 10, 14, 15], "1": [0, 1, 2, 7, 10, 12, 14, 19], "4": [0, 1, 7, 12, 13, 14, 17], "x_i": [0, 14], "you": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19], "thi": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19], "x": [0, 1], "subscript": [0, 14], "from": [0, 1, 2, 3, 7, 10, 12, 14, 15, 16, 17, 19], "through": [0, 1, 8, 12, 14], "so": [0, 1, 2, 3, 7, 10, 14, 15, 17], "when": [0, 3, 9, 12, 13, 14, 16], "indic": [0, 1, 14], "ar": [0, 1, 2, 6, 7, 9, 10, 12, 14, 16, 17, 19], "obviou": 0, "thei": [0, 3, 6, 10, 11, 14], "mai": [0, 9, 12, 14], "quietli": 0, "disappear": 0, "For": [0, 1, 3, 4, 7, 10, 12, 14, 16, 17, 19], "exampl": [0, 1, 3, 6, 9, 10, 12, 14, 16, 17, 19], "over": [0, 3, 14], "all": [0, 1, 3, 7, 10, 15, 17], "2": [0, 1, 2, 12, 14, 17], "3": [0, 1, 2, 7, 10, 12, 14, 15, 17], "which": [0, 3, 6, 7, 9, 10, 12, 14, 17, 19], "case": [0, 1, 9, 10, 12, 14], "could": [0, 9, 12, 14, 17], "without": [0, 3, 14], "two": [0, 1, 3, 12, 14, 15, 17], "number": [0, 1, 2, 6, 12, 14, 17, 19], "cdot": 0, "x_n": [0, 14], "y_1": [0, 14], "y_2": [0, 14], "y_n": [0, 14], "begin": [0, 14], "align": 0, "n": [0, 14], "y_i": [0, 14], "end": [0, 1, 9, 11, 14, 16, 17], "c": [0, 7, 10, 12, 14, 15, 17], "A": [0, 1, 3, 6, 10, 12, 14, 15, 16, 19], "basic": [0, 1, 6], "tutori": [0, 3, 15, 17], "test": [0, 8, 11, 19], "list": [0, 1, 2, 7, 10, 15, 19], "ident": 0, "alreadi": [1, 9, 10, 14], "seen": [1, 10, 14], "mani": [1, 3, 9], "one": [1, 3, 6, 7, 9, 10, 14, 15, 17], "dimension": [1, 14], "also": [1, 6, 10, 14, 15, 16, 17], "three": [1, 6, 7, 14], "consid": [1, 3, 9, 10, 12, 14], "start": [1, 3, 6, 7, 9, 10, 14, 15, 17], "off": 1, "import": [1, 3, 7, 10, 12, 14, 15, 16, 17], "need": [1, 3, 9, 10, 12, 14, 15, 19], "The": [1, 2, 3, 4, 6, 7, 9, 12, 14, 15, 16, 17], "standard": [1, 7, 11, 16, 17], "librari": [1, 7, 14, 15, 17], "work": [1, 2, 3, 5, 7, 11, 12, 14, 15, 16, 17], "numpi": [1, 7, 14], "np": [1, 14], "plot": [1, 3, 7, 14], "matplotlib": [1, 7, 12, 14], "pyplot": [1, 12, 14], "plt": [1, 12, 14], "let": [1, 3, 6, 14, 17], "s": [1, 3, 6, 9, 12, 14], "make": [1, 3, 6, 7, 10, 11, 14, 17], "an": [1, 2, 6, 7, 12, 14, 15, 17, 19], "between": [1, 6, 14], "0": [1, 2, 4, 7, 12, 13, 14, 19], "99": [1, 3], "an_arrai": 1, "9": [1, 14], "94": [1, 14], "25": [1, 14], "79": [1, 14], "56": [1, 12, 14], "49": 1, "73": [1, 14], "31": [1, 14], "91": [1, 14], "13": [1, 7, 12, 14], "27": [1, 14], "77": 1, "45": [1, 14], "59": [1, 14], "63": 1, "42": [1, 14], "80": [1, 14], "24": [1, 8, 14], "96": 1, "6": [1, 7, 12, 14], "16": [1, 7, 8, 14], "88": [1, 14], "shape": 1, "15": [1, 8, 12, 14], "8": [1, 2, 7, 8, 12, 14], "notic": [1, 6, 10, 12, 15, 17], "ha": [1, 3, 6, 7, 9, 10, 12, 14, 15, 17], "element": [1, 2, 6, 19], "its": [1, 3, 9, 12], "row": [1, 14], "column": [1, 14], "In": [1, 2, 3, 6, 9, 10, 12, 14, 15, 17], "fact": [1, 2, 14], "repres": [1, 14, 17], "monochrom": 1, "pictur": 1, "letter": 1, "show": [1, 7, 9, 10, 14, 15, 17], "imshow": 1, "command": [1, 3, 7, 8, 9, 10], "here": [1, 2, 6, 7, 12, 14, 17, 19], "default": [1, 7, 12, 14, 17], "output": [1, 10, 15], "axesimag": 1, "0x7f6c449b2580": 1, "weirdli": 1, "color": [1, 14], "That": [1, 6], "becaus": [1, 3, 6, 10, 12, 14, 15, 16, 17, 19], "colormap": 1, "map": [1, 6], "valu": [1, 2, 6, 10, 12, 17, 19], "call": [1, 2, 3, 6, 10, 12, 14, 17], "viridi": 1, "low": [1, 14], "our": [1, 3, 6, 12, 14, 17], "purpl": [1, 14], "high": [1, 14], "yellow": 1, "see": [1, 3, 4, 7, 9, 10, 12, 14, 15, 16, 17, 19], "relationship": [1, 6, 14], "ask": [1, 3, 6, 8, 14, 16, 17], "colorbar": 1, "0x7f6c448d1f70": 1, "would": [1, 3, 12, 14], "more": [1, 2, 3, 6, 14, 15, 16, 17, 19], "sens": [1, 14], "grayscal": 1, "grai": 1, "like": [1, 3, 6, 7, 9, 10, 12, 14, 15, 16, 17], "cmap": 1, "0x7f6c447c8b80": 1, "contain": [1, 3, 10, 14, 16, 17], "give": [1, 6, 8, 9, 11, 12, 14, 15, 16, 17], "pixel": 1, "intens": 1, "set": [1, 10, 12, 14], "rest": [1, 3, 7, 14], "rcparam": 1, "mean": [1, 2, 3, 9, 14, 15, 17], "session": 1, "now": [1, 3, 4, 6, 7, 10, 12, 14], "0x7f6c44715ee0": 1, "doe": [1, 2, 3, 9, 12, 14, 15, 16, 17], "save": [1, 9, 14], "chang": [1, 3, 7, 10, 14], "rerun": 1, "each": [1, 6, 14], "want": [1, 6, 9, 10, 12, 14, 15, 17], "There": [1, 3, 6, 14, 16, 17, 19], "wai": [1, 3, 6, 9, 12, 14, 15, 17], "rememb": [1, 3, 12, 14, 17], "won": 1, "t": [1, 3, 7, 9, 12, 14], "go": [1, 7, 10, 12, 14], "those": [1, 3, 14], "line": [1, 2, 7, 9, 10, 14, 17], "posit": [1, 3, 14, 17], "python": [1, 2, 3, 6, 7, 11, 14, 15, 17, 19], "9th": 1, "actual": [1, 9, 14], "omit": [1, 14], "second": [1, 10, 12, 14, 17], "assum": [1, 4, 14], "just": [1, 6, 9, 10, 12, 14], "specifi": [1, 7, 15, 17], "might": [1, 3, 10, 12, 14], "To": [1, 3, 6, 7, 9, 12, 14, 15, 17], "do": [1, 2, 3, 6, 10, 15, 17], "function": [1, 14, 15, 16, 17], "first": [1, 6, 7, 9, 12, 14, 15, 17], "argument": [1, 17], "y": [1, 8, 10], "col_posit": 1, "arang": [1, 14], "5": [1, 2, 7, 12, 14], "7": [1, 2, 14], "line2d": 1, "0x7f6c446474f0": 1, "axi": [1, 14], "even": [1, 3, 14], "where": [1, 6, 7, 10, 12, 14, 15, 17, 19], "length": [1, 7, 14], "get": [1, 3, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19], "0x7f6c445ce1f0": 1, "edg": 1, "bar": [1, 9, 10], "ramp": 1, "up": [1, 16], "peak": 1, "middl": 1, "transpos": 1, "method": [1, 10, 11, 16, 17], "effect": [1, 14, 17], "flip": 1, "2d": 1, "0x7f6c44591430": 1, "reshap": 1, "origin": [1, 3, 14], "1d": 1, "stack": 1, "a_1d_arrai": 1, "120": 1, "dimens": 1, "common": [1, 7], "oper": [1, 14, 17], "separ": [1, 3, 14, 15, 17], "ravel": 1, "One": [1, 6, 7, 19], "version": [1, 7, 8, 9, 10, 11, 14], "histogram": 1, "distribut": 1, "hist": 1, "75": [1, 14], "28": [1, 14], "19": [1, 14], "29": [1, 7, 14], "39": [1, 14], "69": 1, "89": [1, 14], "barcontain": 1, "object": [1, 17], "10": [1, 2, 7, 8, 12, 14, 19], "artist": 1, "By": [1, 2, 6, 14, 17], "50": [1, 12, 14], "bin": [1, 9], "how": [1, 3, 7, 10, 11, 14], "keyword": 1, "72": [1, 14], "32": [1, 12, 14, 17], "64": [1, 14], "92": [1, 14], "11": [1, 2, 8, 14], "14": [1, 8, 12, 14], "52": [1, 14], "84": [1, 14], "17": [1, 14], "18": [1, 14], "48": [1, 14], "21": [1, 8, 14], "12": [1, 7, 14], "22": [1, 7, 14], "44": [1, 14], "23": [1, 14], "76": [1, 14], "08": 1, "26": [1, 14], "04": [1, 7, 8], "30": [1, 3, 7, 14], "36": [1, 14], "68": [1, 14], "33": [1, 14], "34": [1, 8, 14], "35": [1, 8, 14], "38": [1, 7, 14], "40": [1, 14], "43": [1, 14], "46": 1, "47": [1, 14], "51": 1, "54": 1, "55": [1, 14], "58": [1, 12], "60": [1, 14], "62": [1, 14], "66": [1, 14], "67": [1, 12, 14], "71": [1, 14], "81": [1, 14], "83": [1, 14], "85": [1, 14], "87": [1, 14], "93": [1, 14], "95": 1, "97": [1, 14], "As": [1, 3, 14, 17], "imagin": [1, 12], "hard": [1, 3], "back": [1, 6], "split": [1, 10, 15, 17], "therefor": [1, 2, 12], "array_back": 1, "0x7f6c44579850": 1, "multipl": [1, 14], "addit": [1, 17], "comparison": [1, 3, 14], "alwai": [1, 9, 17], "elementwis": 1, "multipli": [1, 12, 14], "everi": 1, "90": [1, 14], "990": 1, "940": 1, "250": 1, "790": 1, "560": 1, "490": 1, "730": 1, "310": 1, "910": 1, "130": 1, "270": 1, "770": 1, "450": 1, "590": 1, "630": 1, "420": 1, "800": 1, "240": [1, 6], "960": 1, "160": [1, 6], "880": 1, "true": [1, 2, 12, 14], "fals": [1, 2, 14, 19], "treat": [1, 14], "binar": 1, "threshold": 1, "0x7f6c44312dc0": 1, "slice": 1, "string": [1, 15, 16, 17, 19], "differ": [1, 3, 14, 15, 17], "ani": [1, 2, 3, 9, 14, 19], "same": [1, 3, 9, 10, 11, 12, 14, 17], "time": [1, 7, 9, 11, 14, 15], "dot": [1, 14], "look": [1, 3, 6, 7, 9, 14, 16], "side": [1, 6], "ploat": 1, "top": [1, 9, 14], "last": [1, 2, 14, 17], "0x7f6c44287790": 1, "statement": [2, 6, 12, 19], "rais": 2, "error": [2, 5, 9], "unless": [2, 14], "follow": [2, 3, 6, 7, 9, 10, 12, 14], "express": [2, 12, 14], "equival": [2, 14], "return": [2, 6, 10, 12, 17, 19], "truth": [2, 19], "assertionerror": 2, "It": [2, 3, 6, 7, 9, 10, 12, 14, 15, 16, 17], "noth": 2, "an_express": 2, "result": [2, 3, 12, 17, 19], "wa": [2, 3, 10, 14], "evalu": [2, 19], "No": [2, 3, 19], "These": [2, 3, 6, 10, 14], "traceback": 2, "most": [2, 3, 10, 14], "recent": [2, 3], "cell": [2, 14], "although": [2, 3], "gener": [2, 3, 12, 14, 17, 19], "than": [2, 3, 14, 15, 17, 19], "expr_result": 2, "decid": [2, 3], "whether": [2, 3, 10, 14], "some": [2, 7, 12, 14, 17, 19], "empti": [2, 6, 19], "other": [2, 3, 6, 10, 11, 14, 19], "zero": [2, 12, 19], "none": [2, 6, 19], "singl": [3, 12, 14], "well": [3, 14], "should": [3, 7, 8, 9, 10, 14], "extens": [3, 15, 17], "your": [3, 5, 8, 10, 11, 14, 15], "hand": [3, 6, 11, 12], "sure": [3, 7, 10, 14], "configur": 3, "programm": 3, "pragmat": 3, "Being": 3, "effici": 3, "being": 3, "abl": [3, 6], "tool": [3, 7, 9, 11], "If": [3, 6, 7, 8, 9, 10, 14, 15], "fluent": 3, "think": [3, 14, 16], "better": [3, 9, 14], "quickli": [3, 14], "fewer": 3, "mistak": 3, "particularli": [3, 6, 16], "file": [3, 7, 9, 10, 15], "bear": 3, "mind": [3, 14], "spend": [3, 6], "hundr": 3, "hour": 3, "variou": [3, 14], "part": [3, 7], "career": 3, "Be": [3, 9], "care": [3, 9, 15], "choic": [3, 7], "invest": [3, 7], "learn": [3, 7], "find": [3, 6, 7, 9, 10, 14, 17, 19], "yourself": [3, 17], "task": [3, 14, 16], "includ": [3, 7, 10, 14], "edit": [3, 10], "document": [3, 7, 15, 17], "strang": [3, 17], "bunch": 3, "peopl": [3, 10, 14], "who": [3, 14], "extrem": 3, "intoler": 3, "wast": 3, "energi": 3, "impati": 3, "serious": 3, "notepad": 3, "veri": [3, 9, 14], "good": [3, 7, 11], "reason": 3, "fate": 3, "decis": [3, 7], "order": 3, "wise": 3, "repaid": 3, "handsom": 3, "daili": 3, "carefulli": [3, 9], "long": [3, 14], "haul": 3, "pleas": [3, 14], "underestim": 3, "tempt": 3, "whichev": 3, "chanc": 3, "still": [3, 6], "few": [3, 14], "year": [3, 12, 14], "wrong": 3, "lost": 3, "great": [3, 7, 11], "deal": 3, "later": 3, "curs": 3, "free": [3, 14], "futur": [3, 14], "self": 3, "recrimin": 3, "deliber": 3, "survei": [3, 14], "develop": [3, 11], "jetbrain": 3, "2020": 3, "though": [3, 14], "note": [3, 14], "maker": 3, "2021": 3, "stackoverflow": 3, "languag": 3, "discuss": [3, 15, 17], "trend": [3, 14], "own": [3, 6, 9], "experi": 3, "talk": [3, 14, 18], "lot": [3, 14, 16], "believ": [3, 14], "practic": 3, "term": [3, 14, 15], "abov": [3, 4, 9, 10, 12, 14, 17], "estim": [3, 6, 12, 14], "basi": 3, "bias": 3, "user": [3, 7, 9, 10], "below": [3, 7, 10, 14], "integr": 3, "environ": [3, 10], "almost": [3, 9, 14], "entir": 3, "written": [3, 6, 14], "microsoft": [3, 10], "download": 3, "beer": 3, "about": [3, 7, 9, 14, 17], "truli": 3, "open": [3, 6, 7, 9, 10], "sourc": [3, 9, 10, 14], "freedom": 3, "popular": 3, "increasingli": 3, "power": [3, 10, 17], "featur": [3, 14, 17], "interact": [3, 10, 14], "experiment": 3, "jupyt": [3, 7, 17], "notebook": [3, 5, 7, 14, 16, 17], "out": [3, 12, 14, 17], "box": [3, 9], "highli": 3, "fiddli": 3, "help": [3, 8, 9], "try": [3, 8, 10, 14], "thing": [3, 6, 7, 14, 17], "onlin": 3, "controversi": 3, "vscode": 3, "short": [3, 12, 17], "releas": 3, "build": 3, "comput": [3, 10, 11, 16, 17], "instal": [3, 17], "websit": 3, "refer": [3, 17], "compon": [3, 14], "send": 3, "telemetri": 3, "data": [3, 6, 7, 12, 14, 17], "vscodium": 3, "site": [3, 7], "link": [3, 4, 9, 17], "less": 3, "lock": 3, "extent": 3, "commun": [3, 14], "influenc": 3, "direct": [3, 14], "project": 3, "drive": [3, 17], "pai": 3, "post": 3, "prefer": [3, 10], "theia": 3, "much": [3, 7, 14], "machineri": 3, "behind": [3, 14], "known": 3, "fulli": [3, 14], "cross": [3, 14], "platform": [3, 7], "run": [3, 7, 8, 9, 10, 14, 15], "further": [3, 9, 14], "down": [3, 7, 9], "page": [3, 9, 10, 12, 14, 15, 17], "base": [3, 14, 17], "classic": 3, "unix": [3, 15, 17], "vi": 3, "quot": 3, "isn": 3, "design": 3, "hold": 3, "must": [3, 12, 14], "sever": [3, 14, 19], "openvim": 3, "adventur": 3, "trick": [3, 14], "teach": [3, 7, 11, 14], "finger": 3, "don": [3, 7, 9, 12, 14], "budget": 3, "week": 3, "minut": 3, "dai": 3, "feel": [3, 14], "comfort": 3, "effort": 3, "immens": 3, "satisfi": 3, "joke": 3, "cursor": 3, "ey": 3, "move": 3, "around": 3, "appar": 3, "thought": [3, 14], "rel": [3, 15, 17], "complic": [3, 10, 14], "full": [3, 14, 15, 17], "potenti": [3, 14], "interest": [3, 6, 7, 14], "spent": [3, 6], "heard": 3, "know": [3, 14], "allow": [3, 10, 12, 14, 17], "149": [3, 14], "initi": [3, 14], "annual": 3, "fee": 3, "profession": [3, 14], "support": 3, "web": [3, 7], "detail": [3, 4, 7, 10, 12, 14, 17], "realli": [3, 14], "appear": [3, 14], "trial": 3, "expir": 3, "continu": [3, 10], "author": [3, 14], "bui": 3, "licens": [3, 17], "richard": 3, "stallman": 3, "wrote": 3, "quicker": 3, "probabl": 3, "harder": 3, "degre": [3, 12], "place": [3, 14, 19], "tour": 3, "research": [3, 14], "far": 3, "enough": 3, "keystrok": 3, "ampli": 3, "movement": 3, "larg": [3, 14], "happi": 3, "specif": [3, 14], "packag": [3, 7, 9, 14], "similar": [3, 14, 15, 17], "interfac": [3, 7], "matlab": 3, "graphic": [3, 14], "variabl": [3, 6, 10, 12, 14], "onli": [3, 12, 14, 17], "seem": 3, "recommend": [3, 7, 9, 10], "gender_data": 4, "csv": [4, 12, 14], "matthew": 4, "brett": 4, "dataset": [4, 12, 14], "cc": [4, 13], "BY": [4, 13], "attribut": [4, 15, 17], "world": [4, 11, 14], "bank": 4, "mosquito_b": 4, "dr": 4, "thierri": 4, "lef\u00e8vr": 4, "rate_my_cours": 4, "clear": [4, 14], "keep": [5, 7, 9, 14], "track": [5, 11], "analys": 5, "share": [5, 11], "avoid": [5, 15], "clearer": 6, "english": 6, "premier": 6, "leagu": 6, "epl": 6, "particular": [6, 14, 16, 17], "wage": 6, "bill": 6, "team": 6, "And": [6, 14, 17], "outsid": 6, "london": 6, "suspect": [6, 14], "expens": 6, "citi": [6, 14], "consult": 6, "2022": [6, 7, 8], "2023": 6, "tabl": 6, "manchest": 6, "came": [6, 7], "185": 6, "000": [6, 14], "unit": [6, 14], "third": 6, "212": 6, "135": 6, "liverpool": 6, "fifth": 6, "868": 6, "store": [6, 7, 10, 14, 17], "correspond": [6, 14], "name": [6, 7, 10, 12, 14, 15, 17], "fetch": 6, "type": [6, 9, 10, 12, 14, 15, 17], "dict": 6, "fill": 6, "enter": [6, 9, 10], "pair": 6, "form": [6, 14], "kei": [6, 9, 10, 14], "put": 6, "185_240_000": 6, "185240000": 6, "underscor": 6, "decor": 6, "easier": [6, 11, 14], "human": 6, "read": [6, 14, 17], "had": [6, 9], "nice": [6, 16], "delimit": 6, "thousand": 6, "million": 6, "ignor": [6, 14], "them": [6, 11, 12, 14, 17], "anywher": 6, "18_52_4000_0": 6, "longer": 6, "entri": [6, 14], "consist": [6, 14], "ll": [6, 9, 15], "answer": [6, 14], "18524000": 6, "index": [6, 14], "occur": [6, 14], "squar": [6, 14], "bracket": 6, "insid": 6, "212_135_000": 6, "160_868_000": 6, "212135000": 6, "160868000": 6, "creat": 6, "assign": [6, 12], "directli": 6, "ad": [6, 12, 14], "wages_again": 6, "syntax": 6, "left": [6, 14], "curli": 6, "colon": [6, 12], "comma": 6, "close": [6, 9, 10], "major": 7, "softwar": [7, 9], "class": [7, 9, 17], "arrai": [7, 14], "panda": [7, 12, 14], "load": [7, 14], "manipul": [7, 15, 17], "scipi": [7, 10, 14], "scientif": 7, "statsmodel": 7, "statist": [7, 11, 14], "model": 7, "scikit": 7, "machin": [7, 14, 15, 17], "homework": 7, "text": [7, 9, 14, 17], "editor": [7, 9, 14], "choos": [7, 10], "person": [7, 14], "git": [7, 17], "control": [7, 11, 14], "system": [7, 9, 10, 15, 17], "problem": [7, 9, 17], "worri": [7, 14], "re": [7, 14], "expect": [7, 11, 14], "solv": 7, "troubl": 7, "opportun": [7, 14], "togeth": [7, 17], "trivial": 7, "instruct": [7, 9, 10], "mac": 7, "linux": 7, "window": [7, 9, 15, 17], "next": [7, 9, 14, 15], "termin": [7, 10], "powershel": 7, "suggest": [7, 10, 14], "step": [7, 9, 14], "directori": [7, 10, 15, 16], "home": [7, 9, 15, 16, 17], "cd": [7, 10], "cannot": 7, "path": [7, 9, 10, 17], "shell": 7, "older": [7, 9], "cmd": 7, "new": [7, 10, 11, 12, 14, 17], "mkdir": 7, "dsip": [7, 15, 16, 17], "confirm": [7, 9], "right": [7, 9, 10, 14, 15], "pwd": 7, "print": [7, 10, 14, 19], "someth": [7, 10, 15, 17], "check": [7, 8, 9, 14], "python3": [7, 8, 9], "report": [7, 14], "manag": [7, 9, 14], "pip3": 7, "pip": [7, 8], "copi": [7, 9], "textbook": [7, 16], "clone": 7, "http": [7, 13, 15, 17], "github": [7, 17], "com": 7, "lisd": 7, "requir": [7, 17], "txt": [7, 15, 17], "ls": 7, "finish": 7, "r": [7, 14], "warn": 7, "script": [7, 10], "program": [7, 9, 10], "appdata": [7, 10], "roam": 7, "python310": [7, 10], "final": [7, 17], "correctli": [7, 15, 17], "check_instal": [7, 17], "py": [7, 17], "mode": [7, 10, 12], "lastwritetim": 7, "am": 7, "1937": 7, "succeed": 7, "maco": [7, 9], "x86_64": 7, "i386": 7, "64bit": 7, "mar": 7, "20": [7, 8, 14], "07": 7, "clang": 7, "1300": 7, "congratul": 7, "pass": [7, 14], "depend": [7, 14], "m": 7, "lab": 7, "browser": 7, "select": [7, 9, 10, 14], "bullsey": 8, "unstabl": 8, "sid": 8, "march": 8, "sudo": 8, "apt": 8, "updat": 8, "dev": 8, "tk": 8, "instructor": 8, "dnf": 8, "devel": 8, "tkinter": 8, "bash": 8, "found": 8, "yum": 8, "again": [8, 9, 10, 14], "prompt": [9, 10], "often": [9, 14, 17], "dure": 9, "come": [9, 14], "util": [9, 10], "sub": 9, "folder": 9, "applic": [9, 10], "easiest": 9, "via": [9, 10, 14], "spotlight": 9, "either": [9, 10], "click": [9, 10], "magnifi": 9, "glass": 9, "icon": 9, "menu": [9, 10], "screen": 9, "option": [9, 10], "press": [9, 10, 14], "spacebar": 9, "mini": 9, "invari": 9, "pin": 9, "dock": 9, "chose": [9, 10], "appl": 9, "xcode": 9, "dialog": 9, "wait": 9, "while": [9, 19], "complet": [9, 15, 17], "messag": [9, 19], "miss": 9, "seriou": 9, "nearli": 9, "brew": 9, "failur": 9, "did": [9, 14], "successfulli": 9, "formula": [9, 14], "built": 9, "symlink": 9, "usr": 9, "local": [9, 10], "2to3": 9, "target": 9, "exist": [9, 14], "remov": 9, "rm": 9, "anoth": [9, 14, 17], "presum": 9, "associ": [9, 14], "fix": [9, 11], "forc": 9, "overwrit": 9, "old": 9, "bash_profil": 9, "touch": 9, "textedit": 9, "scroll": 9, "add": [9, 10, 12], "export": 9, "doesn": [9, 12], "automat": 9, "capit": 9, "correct": 9, "lower": 9, "main": 10, "search": 10, "ISE": 10, "Then": 10, "administr": 10, "usual": [10, 12], "normal": [10, 14], "littl": 10, "conveni": [10, 14], "geek": 10, "chocolatei": 10, "choclat": 10, "individu": [10, 14], "permiss": 10, "choco": 10, "mayb": 10, "executionpolici": 10, "privileg": 10, "commandtyp": 10, "41": [10, 14], "instead": [10, 14], "fail": [10, 11], "forgotten": 10, "restart": 10, "after": [10, 12], "recheck": 10, "shown": [10, 14], "ve": [10, 14], "got": 10, "my": 10, "cp": 10, "past": 10, "code": [10, 11, 12, 14, 15, 16], "py_path": 10, "totalcount": 10, "avail": [10, 13, 14], "site_path": 10, "os": [10, 16, 17], "sysconfig": 10, "get_path": 10, "f": [10, 14], "_user": 10, "echo": 10, "gui": 10, "what": [10, 14, 15, 17], "On": [10, 14, 15, 17], "coupl": 10, "user_path": 10, "getenvironmentvari": 10, "setenvironmentvari": 10, "environmentvariabletarget": 10, "done": [10, 14], "cours": [11, 13, 14], "reproduc": 11, "analysi": [11, 14], "deeper": 11, "understand": [11, 14], "cover": [11, 14, 15, 16], "intermedi": 11, "concept": [11, 14], "relat": [11, 14], "wider": 11, "engin": [11, 14], "At": 11, "techniqu": [11, 14, 16], "organ": 11, "explain": [11, 14], "benefit": 11, "collabor": 11, "insight": 11, "rang": [11, 14, 16], "skill": 11, "review": 11, "pd": [12, 14], "set_opt": 12, "copy_on_writ": 12, "global": 12, "temperatur": 12, "1850": 12, "2000": 12, "read_csv": [12, 14], "global_temperature_quart": 12, "651": 12, "1875": 12, "743": 12, "1900": 12, "971": 12, "1925": 12, "895": 12, "1950": [12, 14], "934": 12, "1975": 12, "106": 12, "550": 12, "def": [12, 14], "degrees_c_to_f": 12, "__main__": 12, "appli": [12, 14, 19], "5718": 12, "7374": 12, "57": [12, 14], "1478": 12, "0110": 12, "0812": 12, "3908": 12, "dtype": 12, "float64": 12, "sometim": [12, 15, 17], "bother": 12, "whole": [12, 14], "defin": [12, 14], "recip": 12, "saw": 12, "block": 12, "too": 12, "attach": [12, 17], "c2f_func": 12, "befor": 12, "structur": 12, "signal": 12, "bodi": 12, "why": [12, 14], "shortcut": 12, "convers": 12, "rather": [12, 14, 15, 16, 17], "typic": [12, 14], "But": [12, 14], "celsiu": 12, "kelvin": 12, "scale": 12, "melt": 12, "point": [12, 14, 17], "water": 12, "absolut": [12, 15, 17], "273": 12, "take": [12, 14, 15], "account": [12, 14], "given": [12, 14], "convert": [12, 15, 17], "fahrenheit": 12, "involv": [12, 14], "zero_k_in_f": 12, "459": 12, "66999999999996": 12, "441": 12, "relev": 12, "z": 12, "c2f_again": 12, "easili": [12, 14], "accept": [12, 14], "materi": 13, "under": 13, "creativecommon": 13, "org": [13, 15, 17], "numer": 14, "displai": 14, "jupyprint": 14, "arraytex": 14, "decim": 14, "set_printopt": 14, "precis": 14, "stat": 14, "sp": 14, "simpl": [14, 17], "purpos": 14, "introduc": 14, "whilst": 14, "subset": 14, "reader": 14, "excit": 14, "proposit": 14, "subject": 14, "sound": 14, "unnecessari": 14, "demonstr": 14, "frequent": 14, "paper": 14, "easi": 14, "describ": 14, "concis": [14, 16], "assess": 14, "best": 14, "scientist": 14, "aim": 14, "digest": 14, "challeng": 14, "surpris": 14, "revisit": 14, "certain": 14, "section": 14, "assur": 14, "perserver": 14, "clearli": 14, "With": 14, "briefli": 14, "situat": [14, 19], "scienc": 14, "question": 14, "regard": 14, "observ": 14, "district": 14, "cow": 14, "river": 14, "contin": 14, "molecul": 14, "etc": 14, "characterist": 14, "vari": 14, "compar": 14, "instanc": 14, "taller": 14, "heavier": 14, "height": 14, "weight": 14, "collect": 14, "measur": 14, "group": 14, "across": 14, "score": 14, "onc": 14, "descript": 14, "quantifi": 14, "word": 14, "predict": 14, "financ": 14, "compani": 14, "inform": 14, "custom": 14, "loan": 14, "repay": 14, "e": 14, "g": 14, "ag": 14, "incom": 14, "arm": 14, "context": 14, "histor": 14, "social": 14, "turn": 14, "attent": 14, "duncan": 14, "dun61": 14, "combin": 14, "u": 14, "censu": 14, "nation": 14, "opinion": 14, "centr": 14, "norc": 14, "occup": 14, "percentag": 14, "earn": 14, "amount": 14, "per": 14, "particip": 14, "rate": 14, "prestigi": 14, "adapt": 14, "categori": 14, "prof": 14, "manageri": 14, "wc": 14, "white": 14, "collar": 14, "bc": 14, "blue": 14, "classifi": 14, "respond": 14, "within": 14, "500": 14, "dollar": 14, "2017": 14, "educ": 14, "were": [14, 17], "school": 14, "graduat": 14, "prestig": 14, "df": 14, "duncan_occupational_prestig": 14, "86": 14, "82": 14, "pilot": 14, "architect": 14, "chemist": 14, "minist": 14, "professor": 14, "dentist": 14, "100": 14, "undertak": 14, "74": 14, "lawyer": 14, "98": 14, "physician": 14, "welfar": 14, "worker": 14, "teacher": 14, "conductor": 14, "contractor": 14, "53": 14, "factori": 14, "owner": 14, "banker": 14, "78": 14, "bookkeep": 14, "mail": 14, "carrier": 14, "insur": 14, "agent": 14, "clerk": 14, "carpent": 14, "electrician": 14, "rr": 14, "machinist": 14, "auto": 14, "repairman": 14, "plumber": 14, "ga": 14, "stn": 14, "attend": 14, "coal": 14, "miner": 14, "streetcar": 14, "motorman": 14, "taxi": 14, "driver": 14, "truck": 14, "barber": 14, "37": 14, "bartend": 14, "shoe": 14, "shiner": 14, "cook": 14, "soda": 14, "watchman": 14, "janitor": 14, "policeman": 14, "waiter": 14, "carri": 14, "mechan": 14, "calcul": 14, "fortun": 14, "readabl": 14, "visual": 14, "everyth": 14, "larger": 14, "head": 14, "smaller": [14, 16], "datafram": 14, "depict": 14, "scatter": 14, "xlabel": 14, "ylabel": 14, "scatterplot": 14, "coordin": 14, "sequenc": 14, "vector": 14, "similarli": [14, 17], "both": [14, 16], "clarifi": 14, "current": [14, 15, 17], "seek": 14, "pattern": 14, "present": 14, "higher": 14, "graph": 14, "illustr": 14, "simul": 14, "rng": 14, "random": 14, "default_rng": 14, "seed": 14, "figur": 14, "figsiz": 14, "subplot": 14, "y_strong_neg": 14, "size": 14, "len": 14, "marker": 14, "label": 14, "lin1": 14, "linregress": 14, "education_x": 14, "linspac": 14, "min": 14, "max": 14, "darkr": 14, "xtick": 14, "ytick": 14, "titl": 14, "strong": 14, "neg": 14, "y_rand": 14, "lin2": 14, "weak": 14, "y_strong_po": 14, "lin3": 14, "legend": 14, "bbox_to_anchor": 14, "dark": 14, "red": 14, "summar": 14, "steep": 14, "flat": 14, "equal": 14, "co": 14, "regressor": 14, "covari": 14, "explanatori": 14, "independ": 14, "exogen": 14, "disciplin": 14, "convent": 14, "awar": 14, "terminolog": 14, "respons": 14, "regressand": 14, "endogen": 14, "vec": 14, "arrow": 14, "remind": [14, 17], "earlier": 14, "said": 14, "straight": 14, "b": 14, "idea": 14, "varepsilon": 14, "plu": 14, "systemat": 14, "strength": 14, "small": 14, "explicitli": 14, "constant": 14, "flexibl": 14, "essenti": 14, "restrict": 14, "possibl": 14, "nois": 14, "residu": 14, "variat": 14, "perfect": 14, "datapoint": 14, "themselv": 14, "unlik": 14, "fall": 14, "perfectli": 14, "distanc": 14, "resultantli": 14, "appreci": 14, "moment": 14, "emphasis": 14, "fanci": 14, "equat": 14, "alongsid": 14, "atleast_2d": 14, "bmatrix": 14, "convinc": 14, "recap": 14, "wish": 14, "greater": 14, "limit": 14, "abil": 14, "predictv": 14, "somewhat": 14, "abstract": 14, "explor": 14, "plai": 14, "god": 14, "linear_data_gener": 14, "b_valu": 14, "error_s": 14, "investig": 14, "never": 14, "real": 14, "life": 14, "captur": 14, "spread": 14, "randomli": 14, "mention": 14, "summari": 14, "judg": 14, "smallest": 14, "sum": 14, "perform": 14, "outlin": 14, "minim": 14, "optim": 14, "linregressresult": 14, "0058545962950014": 14, "383432366305456": 14, "rvalu": 14, "5267822840376757": 14, "pvalu": 14, "043636178697705225": 14, "stderr": 14, "4501439537539412": 14, "intercept_stderr": 14, "8621893783399": 14, "paramet": 14, "varieti": 14, "interpret": 14, "006": 14, "obtain": 14, "make_scatt": 14, "with_error": 14, "ro": 14, "hat": 14, "k": 14, "120063": 14, "061517": 14, "15519": 14, "143481": 14, "108354": 14, "161045": 14, "202027": 14, "125918": 14, "049808": 14, "190318": 14, "184463": 14, "149336": 14, "denot": 14, "minu": 14, "879937": 14, "938483": 14, "84481": 14, "891646": 14, "838955": 14, "815537": 14, "dash": 14, "yield": 14, "black": 14, "paus": 14, "perspect": 14, "formal": 14, "match": [14, 17], "x_": 14, "quote_str": 14, "contains_latex": 14, "df_index": 14, "x_notat": 14, "v": 14, "vdot": 14, "total": 14, "complex": 14, "bottom": 14, "count": 14, "counter": 14, "y_notat": 14, "y_": 14, "_1": 14, "_2": 14, "_": 14, "_n": 14, "compactli": 14, "_i": 14, "inclus": 14, "_3": 14, "varepsilon_1": 14, "varepsilon_2": 14, "varepsilon_n": 14, "varepsilon_i": 14, "varepsilon_": 14, "approx": 14, "bx_i": 14, "succe": 14, "exactli": [14, 15, 17], "rephras": 14, "remain": 14, "Of": [14, 16], "assert": [14, 17, 19], "allclos": 14, "spoken": 14, "walkthrough": 14, "clariti": 14, "writer": 14, "multiplicaton": 14, "sign": 14, "thorni": 14, "x_string": 14, "y_string": 14, "e_str": 14, "replac": [14, 17], "gave": 14, "round": 14, "compact": 14, "AND": 14, "hat_str": 14, "conform": 14, "383": 14, "06": 14, "05": 14, "062": 14, "155": 14, "143": 14, "108": 14, "161": 14, "202": 14, "126": 14, "184": 14, "938": 14, "845": 14, "892": 14, "839": 14, "816": 14, "beauti": 14, "happen": 14, "vice": 14, "versa": 14, "replic": 14, "immedi": 14, "leftmost": 14, "certainti": 14, "encount": 14, "previous": 14, "translat": 14, "represent": 14, "content": 14, "grasp": 14, "aspect": 14, "internalis": 14, "eventu": 14, "oti": 14, "dudlei": 14, "socioeconom": 14, "albert": 14, "j": 14, "reiss": 14, "paul": 14, "hatt": 14, "douglass": 14, "cecil": 14, "north": 14, "statu": 14, "109": 14, "york": 14, "1961": 14, "pathlib": [15, 16], "altern": [15, 17], "approach": [15, 17], "primari": [15, 17], "doc": [15, 17], "html": [15, 17], "dirnam": 15, "basenam": 15, "join": [15, 17], "splitext": 15, "abspath": 15, "ipython": [15, 17], "tab": [15, 17], "shorten": 15, "op": 15, "posixpath": [15, 17], "p": [15, 17], "then_filenam": [15, 17], "doubl": 15, "backslash": 15, "escap": 15, "charact": [15, 17], "ye": 15, "root": 15, "filenam": [15, 17], "forward": 15, "slash": 15, "getcwd": [15, 16], "runner": [15, 16, 17], "identifi": [16, 17], "filesystem": [16, 17], "modul": 16, "simpler": 16, "verbos": 16, "reli": 16, "modern": 16, "experienc": 16, "pathnam": 17, "tell": 17, "locat": 17, "disk": 17, "abs_p": 17, "front": 17, "str": 17, "anyth": 17, "parent": 17, "a_path": 17, "rel_path": 17, "clever": 17, "overrid": 17, "divis": 17, "overload": 17, "arithmet": 17, "concaten": 17, "stick": 17, "firstsecond": 17, "fragment": 17, "suffix": 17, "with_suffix": 17, "md": 17, "raw": 17, "byte": 17, "new_path": 17, "a_test_fil": 17, "write_text": 17, "a_multiline_str": 17, "read_text": 17, "nmore": 17, "nlast": 17, "write_byt": 17, "read_byt": 17, "splitlin": 17, "cwd": 17, "os_path": 17, "rmd": 17, "_build": 17, "installation_on_mac": 17, "gitignor": 17, "dictionari": 17, "imag": 17, "makefil": 17, "choosing_editor": 17, "_toc": 17, "yml": 17, "installation_on_window": 17, "lambda_funct": 17, "readm": 17, "lin_regression_not": 17, "data_work": 17, "intro": 17, "_cours": 17, "truthi": [17, 19], "arrays_and_imag": 17, "_config": 17, "installation_on_linux": 17, "algebra_of_sum": 17, "build_requir": 17, "path_manipul": 17, "bib": 17, "until": 17, "0x7f70e0f9a9e0": 17, "tidi": 17, "unlink": 17, "temporari": 17, "joel": 18, "gru": 18, "simpli": 19, "val": 19, "claus": 19, "algorithm": 19, "another_v": 19, "bool": 19}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"some": [0, 3], "algebra": 0, "summat": 0, "sum": 0, "addit": 0, "insid": 0, "multipli": 0, "constant": 0, "valu": [0, 14], "more": [0, 12], "read": 0, "arrai": 1, "imag": 1, "us": [2, 15, 17], "assert": 2, "test": 2, "choos": 3, "an": [3, 10], "editor": 3, "take": 3, "time": 3, "what": 3, "ar": 3, "option": 3, "version": 3, "visual": 3, "studio": 3, "code": 3, "vim": 3, "pycharm": 3, "sublim": 3, "text": 3, "emac": 3, "spyder": 3, "anoth": 3, "window": [3, 10], "suggest": 3, "licens": [4, 13], "data": [4, 5, 11], "otherwis": [4, 13], "specifi": [4, 13], "The": [5, 10, 18], "problem": 5, "dictionari": 6, "instal": [7, 8, 9, 10], "your": [7, 9], "comput": 7, "linux": 8, "python": [8, 9, 10, 16], "3": 8, "git": [8, 9, 10], "atom": 8, "On": 8, "ubuntu": 8, "debian": 8, "fedora": 8, "mac": 9, "termin": 9, "app": 9, "homebrew": 9, "set": 9, "up": 9, "powershel": 10, "10": 10, "11": 10, "chocalatei": 10, "copi": 10, "ex": 10, "python3": 10, "long": 10, "hand": 10, "wai": [10, 16], "short": 10, "check": 10, "extra": 10, "step": 10, "To": 10, "finish": 10, "scienc": 11, "practic": 11, "lambda": 12, "function": 12, "than": 12, "one": 12, "argument": 12, "Not": 13, "notat": 14, "linear": 14, "regress": 14, "model": 14, "do": 14, "good": 14, "job": 14, "predictor": 14, "outcom": 14, "x": 14, "y": 14, "slope": 14, "intercept": 14, "fit": 14, "error": 14, "mathemat": 14, "approxim": 14, "put": 14, "all": 14, "togeth": 14, "refer": 14, "os": 15, "path": [15, 16], "modul": [15, 17], "make": 16, "break": 16, "file": [16, 17], "pathnam": 16, "two": 16, "manipul": 16, "pathlib": 17, "list": 17, "directori": 17, "select": 17, "glob": 17, "around": 17, "output": 17, "delet": 17, "joi": 18, "sorrow": 18, "notebook": 18, "kind": 19, "true": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})