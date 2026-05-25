---
name: git-commit
description: >
  協助撰寫符合專案規範的 Git Commit Message。當使用者提到「寫 commit」、「commit message」、「幫我 commit」、「git 提交訊息」、「這個改動要怎麼 commit」、「commit 格式」等情境時，立即套用此技能。即使使用者只說「幫我整理一下這次的改動說明」或描述了一個程式修改，也應主動使用此技能產生符合 Conventional Commits 規範的 commit message。
---

# Git Commit Message 規範技能

本專案的 commit message 用於自動生成 changelog，**格式必須嚴格遵守**，否則 Git Hooks 會在 commit 時拋出錯誤。

## Commit Message 格式

```
<type>([scope]): <description>

[body]

issue: [issueID]
```

- 尖括號 `<>` 為**必填**，中括號 `[]` 為選填
- 冒號 `:` 後方**必須加一個空白**
- `type` 與 `description` 為必填欄位

---

## 欄位說明

| 欄位 | 必填 | 說明 |
|------|------|------|
| `type` | ✅ | 此次修改的主要目的（見下表，全小寫） |
| `description` | ✅ | 簡短說明，**連 PM 都能理解**的語言 |
| `scope` | 選填 | 影響的 project，用小括號 `()` 包住 |
| `body` | 選填 | 較長的技術說明，**RD 能理解**的細節 |
| `issue` | 部分必填 | 對應的 GitLab issue reference（見下方 issue 規範） |

---

## Type 種類（全部小寫）

收到使用者的改動說明後，**先列出以下選單讓使用者選擇 type**，不要自行決定：

```
請選擇這次 commit 的 type：

1. feat     - 新增/修改功能（feature、大範圍重構、效能改善計畫等）
2. fix      - 修補 bug
3. refactor - 小範圍重構（不影響功能、不需大規模測試）
4. perf     - 小範圍效能優化（不影響整體架構、不需大規模測試）
5. test     - 增加測試 case
6. style    - 格式修改（不影響程式碼運行，如 white-space、formatting 等）
7. docs     - 文件或註解
8. build    - 建置相關修改（專案設定等）
9. ci       - CI 設定檔或 scripts
10. revert  - 手動撤銷回復先前的 commit

請輸入數字或直接輸入 type 名稱：
```

使用者選擇後，再根據選定的 type 繼續產生完整的 commit message。

---

## Issue 規範

**以下 type 必須綁定 issue：`feat`、`fix`、`refactor`、`perf`、`test`**

其他 type（`style`、`docs`、`build`、`ci`、`revert`）可不綁 issue。

Issue reference 格式從 GitLab issue 右下角「Reference」欄位複製，例如：`xqdata/DAQEngine#221`

---

## 範例

### 1. 最簡短的 commit
```
docs: 修改README.md
```

### 2. 不含 body
```
feat(DataCenter): XS分鐘資料收盤後補出該盤fake bar

issue: xqdata/DAQEngine#247
```

### 3. 含 body 說明
```
fix(DataCenter): bug12527 台股XS量比欄位週以上頻率應顯示不支援此頻率

DataCenter週以上頻率判斷不支援一般TA時需追加判斷minTA是否支援，不可直接回傳symbol not support

issue: xqdata/DAQEngine#216
```

### 4. 含 cherry-pick 資訊
```
build(DataCenterTest): 調整專案設定

Unicode -> MultiByte

issue: xqdata/DAQEngine#500
(cherry picked from commit c8b8378e94c801660486cb033fbf9a920719fb5e)
```

### 5. 手動 revert
```
revert(TACalcSvc): 移除testcase

This reverts commit 5a13a4b13e227a7661ffc3f6144bcea5fb832e87.
This reverts commit a7661ffc3f61445a13a4b13e5fb832e87227bcea.
```

---

## 例外情況（git 指令自動產生的不需遵守格式）

- `git revert` 自動產生：`Revert "docs(changelog): 1.5.0.1036"`
- `git merge` 自動產生：`Merge branch 'feature_branch'`

---

## 如何協助使用者

當使用者描述一個程式改動或提問時，你的任務是：

1. **讓使用者選擇 type**：呈現 Type 選單，等使用者選定後再繼續，不要自行代入 type

2. **撰寫 description**：用連 PM 都能理解的語言，避免只寫技術細節

3. **判斷是否需要 body**：
   - 若改動邏輯較複雜，加入 RD 視角的技術說明
   - 若改動單純，可省略

4. **判斷是否需要 issue**：
   - `feat`、`fix`、`refactor`、`perf`、`test` 必須問使用者有無對應的 issue
   - 若使用者提供 issue reference，加入 `issue:` 欄位

5. **輸出格式**：直接輸出可複製的 commit message，使用 code block 包住，方便使用者複製貼上

### 輸出範本

使用者說明改動後，輸出如下：

```
<type>(<scope>): <description>

[body，若有]

issue: <issueID>  （若適用）
```

若使用者的改動涉及多個不同 type，建議拆分成多個 commit 分別提交，並說明拆分理由。

---

## Git Hooks 說明

本專案使用 `simple-git-hooks` + `commitlint` 在 commit/push 時自動驗證格式。

- 若格式不符，會看到類似錯誤：
  ```
  ✖ type must be one of [feat, fix, refactor, perf, test, style, docs, build, ci, revert] [type-enum]
  ```
- 暫時跳過：`git commit --no-verify`（僅限 local 暫存，push 前請改正格式）
- 推送新 branch 無對應 remote 時，push 的 hook 檢查會失敗，可用 `--no-verify` 跳過
