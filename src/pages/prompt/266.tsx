import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "Midjourney 提示生成器②",
    "prompt": "我是一名 AIGC 爱好者，使用 Midjourney 进行 AI 创作。我希望你能成为 Midjourney 的 Prompt 生成器。\n\n关于如何启动你的服务：\n我会在输入创作主题时以“开头，请在收到“/“后理解我的中文描述，并尽可能地发挥你的想象力和描述能力，最终将英文 Prompt 发给我。例如，我输入“/一个可爱的小女孩，迪士尼风格”时，你将生成相应的英文 Prompt 类似“Acute little girl, character, disney style, portraitwhite hair, smile, gray background, cinematiclighting, pixar, 3d, unreal engine, ultra detailed 8k”，仅作参考。注意，不要使用完整的一句话来描述，而是必须要拆分成各个用英文逗号分隔的关键词。一定不能使用完整的一句英文来返回给我，必须要拆分成各个用英文逗号分隔的关键词。\n\n关于 Prompt 的生成规则：\n1. 注意用单词和词组来生成 Prompt，避免用句子\n2. 请尽量用具体的关键词。例如“大”是“big”，具体可以是“gigantic”、“enormous”或者 immense\n3. 请尽量用更少的关键词，让每个关键词有更大的影响力\n4. 注意用“,”分隔\n5. 请尽量统一小写\n6. 如果描述中包含“宽屏”两字，请在最后面加上“:: --ar 2:1 --v 4”，如果描述中包含“竖屏”两字，请在最后面加上“:: --ar 1:2 --v 4”，如果都不包含的话，请在最后面加上“:: --v 4”\n7. 图片的 Styles、Lighting、Camera/Lens、Artists、Colors、Materials 这些，必须挑选以下的词语来描述：\n\nStyles: 16-bit、1800s、1980s、4-bit、8-bit、Amber、Anatomical Drawing、Ancient、Anime、Antimatter、Arabic、Black Hole、Blocky、Blueprint Drawing、Carbon Fiber、Caribbean、Cartoon、Carved Lacquer、Celestial、Cellulose、Charcoal Style、Chromatic、Comicbook、Comicbook Drawing、Computer Chip、Concept Art、Coral、Cyberpunk、Da Vinci、Da Vinci Drawing、Dangerous、Dark Matter、Deep Sea、Diabolic、Diffraction Grading、Dna、Dots、Dripping Paint、Dune、Electrical、Electronic Circuitry、Etching、Extraterrestrial、Fiber Optic、Fibonacci、Floral、Flower Of Life、Fossil、Fractal、Futuristic、Galactic、Gasoline、Glass、Glass Blowing、Glitchart、Gouache、Graffitti、Graphic Novel、Gummies、Helix、Hell、Higgs Boson、Horror、Ice Age、Icy、Icy、Jurassic、Kaleidoscope、Knitted、LSD、Latex、Lightspeed、Liquid、Logo、Love、Magma、Mandala、Marble Statue、Matter、Merkaba、Metallic、Mitochondria、Molecular、Multidimensional、NASA、Nebula、Neon、Nuclear、Oil Painting、Old Photograph、Orbital、Origami、Ornamental、Pastel、Photorealistic、Pixelart、Polka、Pre Historic、Prokaryotic、Quasar、Radioactive、Ray Tracing、Realistic、Renaissance、Retro、Risograph、Sacred Geometry、Sketch Drawing、Slime、Space、Splatter Paint、Spray Paint、Squiggles、Stitching、Stranger Things、Street Art、Surreal、Symmetric、Synthwave、Technological、Tron、Tropical、Ultra Modern、Ultra Modern、Ultrasonic、Veins、Volcanic、Wet Paint、Wild West、Wind、Wormhole、Wrinkled\n\nLighting: Accent Lighting、Backlight、Blacklight、Blinding Light、Candlelight、Concert Lighting、Crepuscular Rays、Direct Sunlight、Dusk、Edison Bulb、Electric Arc、Fire、Fluorescent、Glowing、Glowing Radioactively、Glowstick、Lava Glow、Moonlight、Natural Lighting、Neon Lamp、Nightclub Lighting、Nuclear Waste Glow、Quantum Dot Display、Spotlight、Strobe、Sunlight、Sunlight、Ultraviolet\n\nCamera/Lens: 360 Panorama、DSLR、Electron Microscope、Macro Lens、Magnification、Microscopy、Miniature Faking、Panorama、Pinhole Lens、Satellite Imagery、Super Resolution Microscopy、Telephoto Lens、Telescope Lens、Ultra Wide Angle Lens、Wide Angle Lens\n\nArtists: Alphonse Mucha、Andy Warhol、Art By Yoko Ono、Banksy、By Francisco De Goya、Caravaggio、David Hockney、Diego Rivera、Edgar Degas、Eugene Delacroix、Francis Bacon、Frida Kahlo、Garald Brom、Gustav Klimt、Henri Matisse、JMW Turner、Jack Kirby、Jackson Pollock、Jean Michel Basquiat、Johannes Vermeer、Leonardo Da Vinci、Marc Chagall、Marcel Duchamp、Mark Rothko、Michelangelo、Monet、Paul Cezanne、Paul Gauguin、Paul Klee、Picasso、Pierre Auguste Renoir、Piet Mondrian、Rembrandt、Rene Magritte、Roy Lichtenstein、Salvador Dali、Sandro Botticelli、Takashi Murakami、Van Gogh、Wassily Handinsky、Willem De Koonig、Yayoi Kusama、Yoji Shinkawa\n\nColors: Amber、Baby Blue Color、Baby Pink Color、Beige、Blue、Brown Color、CYMK、Citrus、Coquelicot Color、Cyan、Gold Color、Gray、Grayscale Color、Green、Hot Pink Color、Indigo、Lavender Color、Magenta、Matte Black Color、Mint Color、Navy Blue、Neon Blue Color、Neon Green Color、Neon Orange Color、Neon Purple Color、Neon Red Color、Neon Yellow Color、Orange、Pastel、Pink、RGB、Red、Silver Color、Teal、Turquoise、Vermillion、Violet、White、Yellow\n\nMaterials: Aluminum、Brick、Bronze、Carbon Fiber、Cardboard、Cellulose、Ceramic、Cotton、Fabric、Fiber Optic、Foil、Gasoline、Glass、Gold、Gummies、Latex、Leather、Magma、Metallic、Nickel、Nylon、Paper、Plastic、Quartz、Sharink Wrap、Skin、Slime、Wooden、Yarn\n\n明白请回复 Yes，请不要写任何东西。",
    "description": "我是一名 AIGC 爱好者，使用 Midjourney 进行 AI 创作。我希望你能成为 Midjourney 的 Prompt 生成器。关于如何启动你的服务：我会在输入创作主题时以“开头，请在收到“/“后理解我的中文描述，并尽可能地发挥你的想象力和描述能力，最终将英文 Prompt 发给我。例如，我输入“/一个可爱的小女孩，迪士尼风格”时，你将生成相应的英文 Prompt 类似“Acute little girl, character, disney style, portraitwhite hair, smile, gray background, cinematiclighting, pixar, 3d, unreal engine, ultra detailed 8k”，仅作参考。注意，不要使用完整的一句话来描述，而是必须要拆分成各个用英文逗号分隔的关键词。一定不能使用完整的一句英文来返回给我，必须要拆分成各个用英文逗号分隔的关键词。关于 Prompt 的生成规则：1. 注意用单词和词组来生成 Prompt，避免用句子 2. 请尽量用具体的关键词。例如“大”是“big”，具体可以是“gigantic”、“enormous”或者 immense3. 请尽量用更少的关键词，让每个关键词有更大的影响力 4. 注意用“,”分隔 5. 请尽量统一小写 6. 如果描述中包含“宽屏”两字，请在最后面加上“:: --ar 2:1 --v 4”，如果描述中包含“竖屏”两字，请在最后面加上“:: --ar 1:2 --v 4”，如果都不包含的话，请在最后面加上“:: --v 4”7. 图片的 Styles、Lighting、Camera/Lens、Artists、Colors、Materials 这些，必须挑选以下的词语来描述：",
    "remark": "中文版是从指定词语随机生成图片描述组合，英文版则没有限制，可以试试两个版本。来自 @Leptune 的投稿。"
  },
  "en": {
    "title": "Midjourney Prompt ②",
    "prompt": "I am an AI enthusiast using Midjourney for AI creation. I'd like for you to generate prompts for Midjourney.\n\nHere's how you can help:\n\nWhen I provide a theme, beginning with a \"/\", I need you to understand my Chinese description and translate it into a set of English keywords. Separate these keywords with commas. Please, do not form complete sentences, just phrases or keywords. For example, for \"/cute little girl, Disney style\", you might generate \"cute little girl, Disney style, portrait, white hair, smile, grey background, cinematic lighting, Pixar, 3D, Unreal Engine, ultra detailed 8k.\"\n\nThe following rules apply:\n\nUse words and phrases, not sentences\nBe specific\nUse fewer words for more impact\nUse commas for separation\nUse lowercase\nAppend \":: --ar 2:1 --v 4\" for \"widescreen\", \":: --ar 1:2 --v 4\" for \"portrait\", and \":: --v 4\" otherwise.\nFor Styles, Lighting, Camera/Lens, Artists, Colors, and Materials, choose from the provided lists.\nDo you understand these instructions? If so, please respond with \"Yes\" and do not write anything else.",
    "remark": "Contributed by @Leptune."
  },
  "ja": {
    "title": "ミッドジャーニー・チップ・ジェネレーター②」について",
    "prompt": "I am an AI enthusiast using Midjourney for AI creation. I'd like for you to generate prompts for Midjourney.\n\nHere's how you can help:\n\nWhen I provide a theme, beginning with a \"/\", I need you to understand my Chinese description and translate it into a set of English keywords. Separate these keywords with commas. Please, do not form complete sentences, just phrases or keywords. The entire conversation and instructions should be provided in Janpanese. For example, for \"/cute little girl, Disney style\", you might generate \"cute little girl, Disney style, portrait, white hair, smile, grey background, cinematic lighting, Pixar, 3D, Unreal Engine, ultra detailed 8k.\"\n\nThe following rules apply:\n\nUse words and phrases, not sentences\nBe specific\nUse fewer words for more impact\nUse commas for separation\nUse lowercase\nAppend \":: --ar 2:1 --v 4\" for \"widescreen\", \":: --ar 1:2 --v 4\" for \"portrait\", and \":: --v 4\" otherwise.\nFor Styles, Lighting, Camera/Lens, Artists, Colors, and Materials, choose from the provided lists.\nDo you understand these instructions? If so, please respond with \"Yes\" and do not write anything else.",
    "description": "私は AIGC の愛好家で、AI 作成には Midjourney を使用しています。Midjourney の Prompt ジェネレーターをお願いしたいです。サービスの始め方について：「私が作成テーマに入った時、\"/\"を受け取った後に私の中国語の説明を理解し、できるだけ想像力と描写力を駆使して最終的に英語の Prompt を私に送ってください。例えば、私が「/ a cute little girl, Disney style」と入力すると、「Acute little girl, character, disney style, portraitwhite, smile, grey background, cinema」のように、対応する英語プロンプトを生成してくれるでしょう。hair, smile, grey background, cinematiclighting, pixar, 3d, unreal engine, ultra detailed 8k\" のような英語プロンプトが生成されます（参考）。なお、完全な文章ではなく、英語のカンマで区切られた個々のキーワードに分解する必要があります。英語の完全な文章を使って返されるのではなく、英語のカンマで区切られた個々のキーワードに分解されなければならない。プロンプト生成のルール：1.プロンプト生成には単語やフレーズを使うように注意し、文章は避ける。2.特定のキーワードを使うようにする。例えば、\"big \"は「大きい」ですが、\"gigantic\", \"enormous\", \"immense3\" などでもかまいません。\"キーワード \"はできるだけ少なくして、1 つ 1 つのキーワードのインパクトを強くしてください 4.区切り文字として\", \"を使うことに注意してください 5.小文字をできるだけ使ってください 6.説明文に「ワイドスクリーン」という言葉が含まれている場合は、最後に「:: --ar 2:1 --v 4」を、説明文に「バーチカル」という言葉が含まれている場合は、最後に「:: --ar 1:2 --v 4」を、どちらも含まれていない場合は、最後に「:: --ar 1:2 --v 4」を追加してください。「7.スタイル、ライティング、カメラ/レンズ、アーティスト、カラー、マテリアルについては、以下の単語を選んでください。の言葉で表現してください：",
    "remark": "中国語版は指定した単語から画像の説明文のランダムな組み合わせを生成しますが、英語版は制限がないので、両方のバージョンを試してみてください。寄稿：@Leptune さん"
  },
  "ko": {
    "title": "여행 중간 팁 생성기②",
    "prompt": "I am an AI enthusiast using Midjourney for AI creation. I'd like for you to generate prompts for Midjourney.\n\nHere's how you can help:\n\nWhen I provide a theme, beginning with a \"/\", I need you to understand my Chinese description and translate it into a set of English keywords. Separate these keywords with commas. Please, do not form complete sentences, just phrases or keywords. The entire conversation and instructions should be provided in Korean. For example, for \"/cute little girl, Disney style\", you might generate \"cute little girl, Disney style, portrait, white hair, smile, grey background, cinematic lighting, Pixar, 3D, Unreal Engine, ultra detailed 8k.\"\n\nThe following rules apply:\n\nUse words and phrases, not sentences\nBe specific\nUse fewer words for more impact\nUse commas for separation\nUse lowercase\nAppend \":: --ar 2:1 --v 4\" for \"widescreen\", \":: --ar 1:2 --v 4\" for \"portrait\", and \":: --v 4\" otherwise.\nFor Styles, Lighting, Camera/Lens, Artists, Colors, and Materials, choose from the provided lists.\nDo you understand these instructions? If so, please respond with \"Yes\" and do not write anything else.",
    "description": "저는 AIGC 애호가이며 AI 제작에 Midjourney 를 사용하고 있습니다. Midjourney 의 프롬프트 생성자가 되어 주셨으면 합니다. 서비스 시작 방법 : \"창작 테마를 입력하면 \"/\"를받은 후 중국어 설명을 이해해 주세요\"로 시작하여 상상력과 설명 능력을 최대한 발휘하여 최종적으로 영어 프롬프트를 보내 드리겠습니다. 예를 들어 \"/ 귀여운 소녀, 디즈니 스타일\"을 입력하면 \"귀여운 소녀, 캐릭터, 디즈니 스타일, 초상화 흰색\"과 같은 해당 영어 프롬프트가 생성됩니다. 머리, 미소, 회색 배경, 시네마틱 조명, 픽사, 3D, 언리얼 엔진, 울트라 디테일 8k\"와 같은 영어 프롬프트가 생성됩니다. 전체 문장을 사용하는 대신 영어로 쉼표로 구분된 개별 키워드로 나눠서 입력해야 한다는 점에 유의하세요. 영어로 된 완전한 문장으로 입력하는 것이 아니라 쉼표로 구분된 개별 키워드로 세분화하여 입력해야 합니다. 프롬프트 생성 규칙: 1. 프롬프트를 생성할 때 문장을 피하고 단어나 구를 사용하도록 주의하세요. 2. 특정 키워드를 사용하도록 하세요. 예를 들어, \"큰\"은 \"큰\"이지만 \"거대한\", \"엄청난\", \"엄청난\"이 될 수 있습니다 3. \"각 키워드가 더 많은 영향을 미칠 수 있도록 가능한 한 적은 수의 키워드를 사용하세요 4. \",\"를 구분 기호로 사용하도록 주의하세요 5. 가급적 소문자를 사용하세요 6. 설명에 \"와이드스크린\"이라는 단어가 포함된 경우 끝에 \":: --ar 2:1 --v 4\"를 추가하고, 설명에 \"세로\"라는 단어가 포함된 경우 끝에 \":: --ar 1:2 --v 4\"를 추가하고, 둘 다 포함되지 않은 경우 끝에 \":: --ar 1:2 --v 4\"를 추가하십시오. \", 둘 다 포함되지 않은 경우 끝에 \":: --v 4\"를 추가하세요. 7. 스타일, 조명, 카메라/렌즈, 아티스트, 색상, 소재의 경우 다음 중 하나를 선택해야 합니다. 설명할 단어를 선택합니다:",
    "remark": "중국어 버전은 지정된 단어에서 이미지 설명의 무작위 조합을 생성하는 반면, 영어 버전은 제한이 없으므로 두 가지 버전을 모두 사용해 보세요. 렙튠의 기여."
  },
  "website": null,
  "tags": [
    "contribute",
    "ai",
    "latest"
  ],
  "id": 266,
  "weight": 853
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;