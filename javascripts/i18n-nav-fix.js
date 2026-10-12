document.addEventListener('DOMContentLoaded', function() {
  if (document.documentElement.lang !== 'en') return;
  const map = {
    'ホーム':'Home',
    '学習ガイド':'Learning Guide',
    'スタートガイド':'Getting Started',
    'インストール':'Installation',
    'クイックスタート':'Quickstart',
    '初めてのシミュレーション':'First Simulation',
    '機能別ガイド':'Feature Guides',
    '基本機能':'Basic Features',
    '生物学的模倣':'Biomimetic Systems',
    '分散脳':'Distributed Brain',
    '記憶管理とRAG':'Memory and RAG',
    'SDKとAPI':'SDK and API',
    '運用と配備':'Deployment and Operations',
    'セキュリティと品質':'Security and Quality',
    '研究・拡張領域':'Research and Multimodal',
    '主要リファレンス':'Reference',
    'ユーザーマニュアル':'User Manual',
    'SDKリファレンス':'SDK Reference',
    'SDK API リファレンス':'SDK API Reference',
    'SDK デバイスプラグイン開発ガイド':'SDK Device Plugin Guide',
    'SDK Loihi Brain2Loihi 実行ガイド':'SDK Loihi Brain2Loihi Execution Guide',
    'Plugin ドキュメント同期マトリクス':'Plugin Documentation Sync Matrix',
    '実装ステータス':'Implementation Status',
    'リリースノート':'Release Notes',
    '索引と横断導線':'Index and Cross-links',
    'ドキュメントマップ':'Documentation Index',
    'コア概念':'Core Concepts',
    'アーキテクチャ詳細':'Architecture Details',
    'APIドキュメント':'API Documentation',
    'OpenAPI スキーマ':'OpenAPI Schema',
    'コーディング規約':'Coding Standards',
    '補助ページ':'Extras',
    'テスト戦略':'Testing Strategy',
    'クイズ':'Quizzes',
    'MkDocs ビルド':'MkDocs Build',
    'EvoSpikeNet 応用例':'EvoSpikeNet Applications',
    'インデックス':'Index',
    'BrainOS（次世代版）':'BrainOS (Next-Generation)',
    '概要仕様書':'Overview',
    '詳細仕様書':'Detailed Specification',
    '実装プラン':'Implementation Plan',
    'ユースケース・応用例':'Use Cases',
    'EvoSpikeNet-Core 社会実装アプリ':'EvoSpikeNet-Core Social Implementation Apps',
    'アプリ一覧':'App Catalog'
  };

  function replaceTextNode(node) {
    const t = node.nodeValue.trim();
    if (!t) return;
    if (map[t]) {
      node.nodeValue = node.nodeValue.replace(t, map[t]);
    }
  }

  // Replace direct text nodes in common nav/header containers
  const containers = ['header', 'nav.md-nav', '.md-header__title', '.md-header__topic', '.md-nav__link', '.md-nav__title'];
  containers.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) replaceTextNode(n);
        else if (n.nodeType === Node.ELEMENT_NODE) {
          n.childNodes.forEach(cn => { if (cn.nodeType === Node.TEXT_NODE) replaceTextNode(cn); });
        }
      });
    });
  });

  // Replace anchor texts explicitly
  document.querySelectorAll('nav a, .md-nav__link, .md-select__link, .md-tabs__list a').forEach(a => {
    const t = a.textContent.trim();
    if (map[t]) a.textContent = map[t];
  });

});
