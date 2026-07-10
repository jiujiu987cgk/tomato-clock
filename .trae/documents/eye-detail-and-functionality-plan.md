# 眼部细节 & 功能交互优化计划

## 1. 当前状态分析

### 1.1 眼部细节
- **common.js 五大动物图标**: 仓鼠、小鹿、兔子、蝴蝶、小狗 已具备双高光+金色星星 ✨
- **home.html**: 跑轮仓鼠、任务卡片兔子、完成弹窗小狗 均已有眼部细节 ✨
- **ai-chat.html**: 小鹿头像眼部细节完整 ✨
- **break-guide.html**: 睡觉小鹿(闭眼)、拉伸仓鼠眼部细节OK，但三个休息卡片图标需要优化
- **task-plan.html**: 兔子装饰缺少金色星星和睫毛，蝴蝶眼睛可优化

### 1.2 休息引导页图标
三个休息卡片图标目前混合风格，需要统一为2D卡通涂鸦风格：
- 放空发呆：兔子闭眼，整体OK但需要更卡通化
- 微社交：仓鼠+小鹿双角色，较复杂，需要简化
- 身体活动：仓鼠拉伸，整体OK但需要统一风格

### 1.3 功能与交互问题
| 问题 | 文件 | 严重度 |
|------|------|--------|
| navigation 使用 window.open | dashboard.html, settings.html | 高 |
| 脑洞倾泻区不保存到 localStorage | task-plan.html | 中 |
| 添加任务时承诺度不保存(写死为3) | task-plan.html | 中 |
| Plan B 按钮跳转到不存在的 plan-b.html | task-plan.html | 中 |
| 拉伸步骤切换时仓鼠姿势不变化 | break-guide.html | 中 |
| 主页任务卡片"点击设定目标"无点击事件 | home.html | 低 |
| 完成弹窗中蝴蝶容器ID可能为空 | home.html | 低 |

---

## 2. 修改计划

### 阶段一：修复导航和基础交互 (高优先级)

#### 2.1 dashboard.html - 修复导航
- **位置**: 第762行
- **修改**: `window.open(page, '_blank')` → `window.location.href = page`

#### 2.2 settings.html - 修复导航
- **位置**: 第614行
- **修改**: `window.open(page, '_blank')` → `window.location.href = page`

#### 2.3 home.html - 任务卡片添加点击跳转
- **位置**: 第523-568行 (card 区域)
- **修改**: 给 `.card` 添加 `onclick="openPage('task-plan.html')"` 和 `cursor: pointer` 样式

#### 2.4 task-plan.html - Plan B 按钮修复
- **位置**: 第693-695行
- **修改**: 将 `openPlanBModal()` 改为展示一个 if-then 计划弹窗（内联modal），不再跳转到不存在的 plan-b.html

### 阶段二：眼部细节补充 (中优先级)

#### 2.5 task-plan.html - 兔子装饰添加金色星星和睫毛
- **位置**: 第332-365行 (兔子SVG)
- **修改**: 在眼睛上方添加睫毛路径，添加金色星星 `<g>` 元素

#### 2.6 task-plan.html - 蝴蝶眼睛优化
- **位置**: 第373-395行 (蝴蝶SVG)  
- **修改**: 为蝴蝶添加双高光眼睛结构（当前已有基本眼睛，需要增强）

### 阶段三：休息引导页图标重绘 (中优先级)

#### 2.7 break-guide.html - 三个休息卡片图标重绘
统一为2D卡通涂鸦风格，特点：
- 粗轮廓线 (stroke-width: 2.5-3)
- 扁平色块为主
- 简化细节，突出可爱感
- 与背景对比度足够

**放空发呆卡片** (第336-357行):
- 保留兔子形象，闭眼用弧形曲线
- 加粗轮廓，简化耳朵内部层次
- 添加 ZZZ 文字气泡

**微社交卡片** (第371-401行):
- 改为两个小动物面对面聊天的简化场景
- 用对话气泡替代复杂的人物细节
- 保持简洁可爱

**身体活动卡片** (第415-455行):
- 保留仓鼠拉伸形象
- 简化手臂线条，加粗轮廓
- 添加运动线效果

### 阶段四：功能交互完善 (中优先级)

#### 2.8 task-plan.html - 脑洞倾泻区 localStorage 持久化
- 添加 `brainDump` textarea 的 `oninput` 事件监听
- 在 `loadTasks()` 中同时加载脑洞内容
- 使用 key: `pomodoro_brain_dump`

#### 2.9 task-plan.html - 承诺度选择保存
- 在 `submitTask()` 中读取当前选中的承诺度（paw rating）
- 替换写死的 `commitment: 3`

#### 2.10 break-guide.html - 拉伸步骤动态切换
- 为4个拉伸步骤（颈部拉伸、肩部放松、手腕活动、深呼吸）创建不同的仓鼠姿势SVG
- 在 `updateStepDisplay()` 中切换 SVG 内容
- 添加步骤名称的动画过渡

#### 2.11 break-guide.html - 添加跳过休息按钮
- 在倒计时区域添加"跳过休息"按钮
- 点击后直接跳回 home.html

---

## 3. 实施步骤

### Step 1: 修复导航 (dashboard.html + settings.html)
- 两个文件各改一行

### Step 2: home.html 任务卡片可点击
- 添加 onclick 和 cursor 样式

### Step 3: task-plan.html 眼部细节 + Plan B 弹窗 + 脑洞保存 + 承诺度
- 兔子添加睫毛和星星
- 蝴蝶眼睛增强
- Plan B 改为内联弹窗
- 脑洞 textarea 绑定 oninput 保存到 localStorage
- submitTask 读取实际承诺度

### Step 4: break-guide.html 休息图标重绘 + 拉伸步骤切换 + 跳过按钮
- 三个休息卡片图标重绘
- 4个拉伸姿势SVG + 动态切换逻辑
- 添加跳过休息按钮

---

## 4. 验证步骤
1. 打开 dashboard.html，点击底部导航，确认页面同窗口跳转
2. 打开 settings.html，点击底部导航，确认页面同窗口跳转
3. 打开 home.html，点击任务卡片，确认跳转到 task-plan.html
4. 打开 task-plan.html，确认兔子眼睛有睫毛和金色星星
5. 打开 task-plan.html，添加任务时选择承诺度，确认保存正确
6. 打开 task-plan.html，在脑洞区输入文字，刷新页面确认内容保留
7. 打开 task-plan.html，点击 Plan B 卡片，确认弹窗展示
8. 打开 break-guide.html，确认三个休息卡片图标风格统一
9. 打开 break-guide.html，观察拉伸步骤每30秒切换，姿势和文字都变化
10. 打开 break-guide.html，点击跳过休息，确认跳回主页