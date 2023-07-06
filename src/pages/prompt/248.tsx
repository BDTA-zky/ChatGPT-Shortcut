import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "雅思写作①",
    "prompt": "你是一名专业的英语教授\n下面是雅思写作任务评分标准。\n第一步，\n指定题目为《示例题目：Rich countries often give money to poorer countries, but it does not solve poverty. Therefore, developed countries should give other types of help to the poor countries rather than financial aid. To what extent do you agree or disagree? You should write at least 250 words.》\n按照不同 9，8，7，6 分的标准分别进行四次回答\n你的不同分数回答前应该有标题【【不同的分数】的解答】\n第二步，在第一步完毕后，在 9，8，7，6 分中你需要解释为什么回答不会得更高或者更低的分数，你要引用回答的句子具体解释在“写作任务完成情况 连贯与衔接 词汇丰富程度 语法多样性及准确性”中这些回答的区别。\n换句话说，引用你刚刚的 9，8，7，6 分的答案中的语句，来解释在“写作任务完成情况 连贯与衔接 词汇丰富程度 语法多样性及准确性”中为什么答案获得了某一个分数。\nLet's think step by step\n9 分：\n\n写作任务完成情况：完全满足所有的写作任务要求，清晰地呈现充分展开的写作内容\n连贯与衔接：衔接手段运用自如，行文连贯，熟练地运用分段\n词汇丰富程度：使用丰富的词汇，能自然地使用并掌握复杂的词汇特征；极少出现轻微错误，且仅属笔误\n语法多样性及准确性：完全灵活且准确地运用丰富多样的语法结构；极少出现轻微错误，且仅属笔误\n8 分：\n\n写作任务完成情况：写作内容充分地涵盖了所有的写作任务要求，就主要内容/要点进行清晰和恰当的呈现、强调以及阐述\n连贯与衔接：将信息与观点进行有逻辑的排序，各种衔接手段运用得当，充分且合理地使用分段\n词汇丰富程度：流畅和灵活地使用丰富的词汇，达意准确，熟练地使用不常用词汇，但在词语选择及搭配方面有时偶尔出现错误，拼写及/或构词方面错误极少\n语法多样性及准确性：运用丰富多样的语法结构，大多数句子准确无误，只在极偶然情况下出现错误或存在不当之处\n7 分：\n\n写作任务完成情况：写作内容涵盖写作任务的要求，（学术类）清晰地呈现关于主要趋势、区别或不同阶段的概述，（培训类）清晰地呈现写作目的，行文语气一致且恰当，能就主要内容/要点进行清晰的呈现与强调，但未能更为充分地展开\n连贯与衔接：符合逻辑地组织信息及观点，清晰的行文推进贯穿全文，恰当地使用一系列衔接手段，尽管有时使用不足或过多，有时无法保持一贯清晰或恰当地使用指代\n词汇丰富程度：使用足够的词汇，体现一定灵活性及准确性，使用不常见词汇，对语体及搭配有一定认识，在选择用词、拼写及/或构词方面可能偶尔出现错误\n语法多样性及准确性：运用各种复杂的语法结构，多数句子准确无误，对语法及标点符号掌握较好，但有时出现少许错误\n6 分：\n\n写作任务完成情况：根据写作任务要求作文，（学术类）选择恰当的信息进行概述，（培训类）写作目的基本清晰，行文语气有时未能保持前后一致，呈现并充分地强调了主要内容/要点，但有时含有不相关、不恰当或不准确的细节信息\n连贯与衔接：连贯地组织信息及观点，总体来说，能清晰地推进行文发展，有效地使用衔接手段，但句内及/或句间的衔接有时有误或过于机械，有时无法保持一贯清晰或恰当地使用指代\n词汇丰富程度：使用足够的词汇开展写作任务，试图使用不常用词汇，但有时使用不准确，在拼写及/或构词方面有错误，但不影响交流\n语法多样性及准确性：综合使用简单句式与复杂句式，在语法及标点符号方面有一些错误，但这些错误很少影响交流",
    "description": "你是一名专业的英语教授，下面是雅思写作任务评分标准。第一步，指定题目为《题目》按照不同 9，8，7，6 分的标准分别进行四次回答你的不同分数回答前应该有标题【【不同的分数】的解答】第二步，在第一步完毕后，在 9，8，7，6 分中你需要解释为什么回答不会得更高或者更低的分数，你要引用回答的句子具体解释在“写作任务完成情况 连贯与衔接 词汇丰富程度 语法多样性及准确性”中这些回答的区别。换句话说，引用你刚刚的 9，8，7，6 分的答案中的语句，来解释在“写作任务完成情况 连贯与衔接 词汇丰富程度 语法多样性及准确性”中为什么答案获得了某一个分数。Let's think step by step9 分：写作任务完成情况：完全满足所有的写作任务要求，清晰地呈现充分展开的写作内容连贯与衔接：衔接手段运用自如，行文连贯，熟练地运用分段词汇丰富程度：使用丰富的词汇，能自然地使用并掌握复杂的词汇特征；极少出现轻微错误，且仅属笔误语法多样性及准确性：完全灵活且准确地运用丰富多样的语法结构；极少出现轻微错误，且仅属笔误 8 分：写作任务完成情况：写作内容充分地涵盖了所有的写作任务要求，就主要内容/要点进行清晰和恰当的呈现、强调以及阐述连贯与衔接：将信息与观点进行有逻辑的排序，各种衔接手段运用得当，充分且合理地使用分段词汇丰富程度：流畅和灵活地使用丰富的词汇，达意准确，熟练地使用不常用词汇，但在词语选择及搭配方面有时偶尔出现错误，拼写及/或构词方面错误极少语法多样性及准确性：运用丰富多样的语法结构，大多数句子准确无误，只在极偶然情况下出现错误或存在不当之处 7 分：写作任务完成情况：写作内容涵盖写作任务的要求，（学术类）清晰地呈现关于主要趋势、区别或不同阶段的概述，（培训类）清晰地呈现写作目的，行文语气一致且恰当，能就主要内容/要点进行清晰的呈现与强调，但未能更为充分地展开连贯与衔接：符合逻辑地组织信息及观点，清晰的行文推进贯穿全文，恰当地使用一系列衔接手段，尽管有时使用不足或过多，有时无法保持一贯清晰或恰当地使用指代词汇丰富程度：使用足够的词汇，体现一定灵活性及准确性，使用不常见词汇，对语体及搭配有一定认识，在选择用词、拼写及/或构词方面可能偶尔出现错误语法多样性及准确性：运用各种复杂的语法结构，多数句子准确无误，对语法及标点符号掌握较好，但有时出现少许错误 6 分：写作任务完成情况：根据写作任务要求作文，（学术类）选择恰当的信息进行概述，（培训类）写作目的基本清晰，行文语气有时未能保持前后一致，呈现并充分地强调了主要内容/要点，但有时含有不相关、不恰当或不准确的细节信息连贯与衔接：连贯地组织信息及观点，总体来说，能清晰地推进行文发展，有效地使用衔接手段，但句内及/或句间的衔接有时有误或过于机械，有时无法保持一贯清晰或恰当地使用指代词汇丰富程度：使用足够的词汇开展写作任务，试图使用不常用词汇，但有时使用不准确，在拼写及/或构词方面有错误，但不影响交流语法多样性及准确性：综合使用简单句式与复杂句式，在语法及标点符号方面有一些错误，但这些错误很少影响交流",
    "remark": "针对同一主题撰写不同分数的雅思文章，并附上评分原因。来自 @fansi2020 的投稿。"
  },
  "en": {
    "title": "IELTS writing①",
    "prompt": "Using the IELTS Writing Task scoring criteria, please respond to the following theme four times, each with a different level of proficiency: 9, 8, 7, and 6.\n\nThe theme is: 'Rich countries often give money to poorer countries, but it does not solve poverty. Therefore, developed countries should give other types of help to the poor countries rather than financial aid. To what extent do you agree or disagree? Your essay should be at least 250 words.'\n\nFor each response, please begin with the title 'Response for Score X', where X is the score level (9, 8, 7, or 6).\n\nAfter the four responses, explain why each response deserves its respective score, considering the following aspects: task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy. Reference specific sentences from each response to support your explanation.",
    "remark": "Compose IELTS essays on the same topic with varying scores, accompanied by the reasons for the ratings. Contributed by @fansi2020."
  },
  "ja": {
    "title": "IELTS Writing①について",
    "prompt": "Using the IELTS Writing Task scoring criteria, please respond to the following theme four times, each with a different level of proficiency: 9, 8, 7, and 6.\n\nThe theme is: 'Rich countries often give money to poorer countries, but it does not solve poverty. Therefore, developed countries should give other types of help to the poor countries rather than financial aid. To what extent do you agree or disagree? Your essay should be at least 250 words.'\n\nFor each response, please begin with the title 'Response for Score X', where X is the score level (9, 8, 7, or 6).\n\nAfter the four responses, explain why each response deserves its respective score, considering the following aspects: task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy. The entire conversation and instructions should be provided in Janpanese. Reference specific sentences from each response to support your explanation.",
    "description": "あなたはプロの英語教授であり、ここに IELTS ライティングタスクの採点基準を示します。ステップ 1：問題を \"Topic \"とする 異なる 9、8、7、6 マークの基準に従って、あなたの異なるスコアへの 4 つの別々の回答 あなたの回答は、[Answers to [different marks]] という見出しで先行されるべきである ステップ 2：最初のステップの後、9、8、7、6 マークでは、なぜその回答のスコアが高くなったり低くなったりしないのかを説明し、回答の文章を引用し、具体的に説明しなければならない\"Completion of the writing task Coherence and articulation Vocabulary richness Grammatical variety and accuracy \"の中で、これらの回答の違いを説明する必要があるのです。つまり、9 点、8 点、7 点、6 点の答案から、なぜその答案が「Writing task completion Coherence and articulation Vocabulary richness Grammatical variety and accuracy」で特定の点を獲得したのかを説明するための記述を引用してください。Coherence and articulation：快適なアーティキュレーションの使用、首尾一貫した文章、巧みなセグメンテーションの使用 Vocabulary richness：豊富な語彙を使用し、複雑な語彙の特徴を自然に使用し習得している；ごくわずかな誤り、事務的な誤りのみ Grammar variety and accuracy：豊富な文法構造を柔軟にかつ正確に使用している；ごくわずかな誤り。8 点：ライティング・タスクの完了：ライティング・タスクの要件をすべて適切に満たしており、重要な要素やポイントを明確かつ適切に提示、強調、推敲している。一貫性と表現力：情報やアイデアの論理的順序、さまざまな表現方法の適切な使用、分割された語彙の適切かつ賢明な使用 豊かすぎて：意味を伝えるための豊富な語彙の流暢で柔軟な使用法豊富な語彙を正確に使用し、一般的ではない語彙の使用にも習熟しているが、単語の選択やコロケーションに時折誤りがあり、スペルや単語の形成に最低限の誤りがある。文章のトーンは一貫して適切で、重要な要素やポイントを明確に提示し、強調しているが、一貫性と明瞭さをより十分に発展させていない：情報やアイデアは論理的に整理され、文章全体を通して明確な行程があり、様々な表現方法を適切に使用しているが、時には不十分または不適切である。語彙の豊富さ：適切な語彙の使用、ある程度の柔軟性と正確さ、珍しい単語の使用、スタイルとコロケーションの認識、単語の選択、スペル、単語の形成に時折誤りがある可能性 文法の多様性と正確さ：複雑な文法構造の使用、ほとんどの文 6 点：ライティング・タスクの完了：ライティング・タスクの要件に従って書くことができる、（Academic）要約する情報を適切に選択する、（Training）文章の目的は概ね明確、文章のトーンは時に一貫性がない、主要な内容やポイントを適切に提示・強調するが、時に無関係、不適切、不正確な情報を含む。詳細な情報の一貫性と表現力：情報やアイデアを首尾一貫して整理し、概ね明確に前進させ、効果的に表現しているが、文の中や間の表現が時々間違っていたり、機械的すぎたり、一貫した明確さを維持できなかったり、参照語を適切に使用できないことがある 語彙の豊富さ：文章課題を遂行するのに十分な語彙を使用し、あまり一般的ではない語彙を使用しようとするが、不正確な使用、スペルや単語の形成に誤りがあることがある。スペルや単語の形成に誤りがあるが、文法の多様性やコミュニケーションの正確さには影響しない：単純な文と複雑な文を組み合わせて使用し、文法や句読点に多少の誤りがあるが、コミュニケーションにはほとんど影響しない。",
    "remark": "同じトピックで異なる点数の IELTS エッセイを採点理由付きで書いてみる。fansi2020 さんからの寄稿です。"
  },
  "ko": {
    "title": "IELTS 쓰기 ①",
    "prompt": "Using the IELTS Writing Task scoring criteria, please respond to the following theme four times, each with a different level of proficiency: 9, 8, 7, and 6.\n\nThe theme is: 'Rich countries often give money to poorer countries, but it does not solve poverty. Therefore, developed countries should give other types of help to the poor countries rather than financial aid. To what extent do you agree or disagree? Your essay should be at least 250 words.'\n\nFor each response, please begin with the title 'Response for Score X', where X is the score level (9, 8, 7, or 6).\n\nAfter the four responses, explain why each response deserves its respective score, considering the following aspects: task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy. The entire conversation and instructions should be provided in Korean. Reference specific sentences from each response to support your explanation.",
    "description": "귀하는 전문 영어 교수이며 다음은 IELTS 작문 과제에 대한 채점 기준입니다. 1 단계: 문제를 \"주제\"로 지정 9, 8, 7, 6 점 기준에 따라 서로 다른 점수에 대해 4 개의 개별 답변을 작성합니다. 서로 다른 점수에는 [[다른 점수] 답변] 제목이 앞에 와야 합니다. 2 단계: 첫 번째 단계가 끝나면 9, 8, 7, 6 점에 답변이 더 높거나 낮은 점수를 받지 못한 이유를 설명해야 하며, 구체적으로 설명할 답변의 문장을 인용하여 다음에서 설명해야 합니다. \"쓰기 과제의 완성도 일관성 및 명료성 어휘의 풍부성 문법적 다양성 및 정확성\"에서 이들 답안 간의 차이를 설명해야 합니다. 즉, 9 점, 8 점, 7 점, 6 점 답안의 문장을 인용하여 '쓰기 과제 완성도 일관성 및 명료성 어휘의 풍부성 문법적 다양성 및 정확성'에서 특정 점수를 받은 이유를 설명해야 합니다. 일관성 및 명료성: 명료성을 편안하게 사용, 일관성 있는 글쓰기, 분절의 숙련된 사용 어휘 풍부성: 풍부한 어휘를 사용하고 복잡한 어휘 특징을 자연스럽게 사용 및 숙달, 사소한 오류가 거의 없고 사무적인 오류만 있음 문법 다양성 및 정확성: 다양한 문법 구조를 완전히 유연하고 정확하게 사용, 사소한 오류가 매우 적음. 8 점: 작문 과제의 완성도: 명확하고 적절한 표현, 핵심 요소/요점의 강조 및 정교함을 통해 작문 과제의 모든 요구 사항을 적절히 다루고 있음 일관성 및 명료성: 정보와 아이디어의 논리적 순서, 다양한 명료성 장치의 적절한 사용, 세분화된 어휘의 적절하고 합리적인 사용 풍부성: 의미 전달을 위해 풍부한 어휘를 유창하고 유연하게 사용함. 풍부한 어휘를 정확하고 능숙하게 사용하지만, 단어 선택 및 배열에 가끔 오류가 있고 철자 및/또는 단어 형성에서 최소한의 오류가 있음 문법적 다양성 및 정확성: 다양한 문법 구조를 사용하고 대부분의 문장이 정확하며 가끔 오류나 부적절한 특징만 있음 7 점: 쓰기 과제 완성도: 쓰기 과제의 요구 사항을 충족하는 쓰기, (학업적) 글의 어조가 일관되고 적절하며, 핵심 요소/요점을 명확하게 제시하고 강조하지만, 일관성과 명료성을 더 충분히 발전시키지 못함: 정보와 아이디어가 논리적으로 구성되며, 글 전체에 걸쳐 명확한 줄의 진행과 다양한 명료성을 적절히 사용함. 때때로 과소 또는 과대 사용, 때때로 일관되지 않은 명확성 또는 적절한 참조어 사용 어휘의 풍부함: 적절한 어휘 사용, 약간의 유연성과 정확성, 덜 일반적인 단어 사용, 스타일 및 배열에 대한 약간의 인식, 단어 선택, 철자 및 / 또는 단어 형성에서 가끔 오류 가능 문법 다양성과 정확성: 다양하고 복잡한 문법 구조, 대부분의 문장 사용 6 점: 쓰기 과제 완성도: 쓰기 과제의 요구 사항에 따라 작성, (학업) 요약할 적절한 정보 선택, (훈련) 글의 목적이 대체로 명확하고, 글의 어조가 때때로 일관성이 없으며, 주요 내용/요점을 적절하게 제시하고 강조하지만 때때로 관련 없거나 부적절하거나 부정확한 내용을 포함함. 세부 정보의 일관성 및 명료성: 정보와 아이디어를 일관성 있게 구성하고, 일반적으로 명확하게 진행하며, 명료성을 효과적으로 사용하지만 문장 내 및/또는 문장 간 명료성이 때때로 부정확하거나 너무 기계적이며, 때때로 일관된 명확성을 유지하지 못하거나 참조어를 적절하게 사용하지 못함 어휘 풍부성: 쓰기 과제를 수행하기에 충분한 어휘를 사용하고, 덜 일반적으로 사용되는 어휘를 사용하려고 시도하지만 때로는 부정확하게 사용하고, 철자 오류 및/또는 철자 및/또는 단어 형성에 오류가 있지만 문법적 다양성과 의사 소통의 정확성에 영향을 미치지 않음: 단순하고 복잡한 문장을 조합하여 사용하며 문법과 구두점에 약간의 오류가 있지만 의사 소통에 거의 영향을 미치지 않음.",
    "remark": "같은 주제에 대해 서로 다른 점수로 IELTS 에세이를 작성하고 채점 이유를 설명하세요. 팬시 2020 의 기여."
  },
  "website": null,
  "tags": [
    "contribute",
    "pedagogy"
  ],
  "id": 248,
  "weight": 226
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;