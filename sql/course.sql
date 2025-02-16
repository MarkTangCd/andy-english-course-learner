CREATE TABLE IF NOT EXISTS "public"."course" (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) UNIQUE NOT NULL,
  audio TEXT[] NOT NULL
);

INSERT INTO "public"."course" (id, name, audio) VALUES (1, '14-1', ARRAY['14期1课1-30句子.mp3', '14期1课(单词).mp3']);
INSERT INTO "public"."course" (id, name, audio) VALUES (2, '10-5', ARRAY['地道口语第十期第5课(正文mp3).mp3', '地口第十期第5课(句子单词mp3).mp3']);
INSERT INTO "public"."course" (id, name, audio) VALUES (3, '1-1', ARRAY['地道口语第一课（动画mp3）.mp3', '地道口语第一期第1课（正文音频）.mp3', '地道口语第一期第1课（句子词组mp3）.mp3']);
INSERT INTO "public"."course" (id, name, audio) VALUES (4, '1-2', ARRAY['地口第2课（正文1音频）.mp3', '地口第2课（正文2mp3）.mp3', '地口第1期第2课（句子词组mp3）.mp3']);