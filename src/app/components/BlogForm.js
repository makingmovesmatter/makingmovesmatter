"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect, useMemo, useRef } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { 
    MdAdsClick, 
    MdImage, 
    MdCopyAll, 
    MdCheckCircle,
    MdError,
    MdMenu,
    MdClose
} from "react-icons/md";
import { 
    SiGoogleanalytics 
} from "react-icons/si"; 
import { 
    FaSearch,
    FaPlus,
    FaMinus,
    FaTag,
    FaList,
    FaQuestionCircle
} from "react-icons/fa";

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const BlogForm = ({ onSubmit, initialData = {} }) => {
    const editor = useRef(null);
    const router = useRouter();
    
    const [form, setForm] = useState({
        blog_title: "",
        blog_slug: "",
        blog_banner: "",
        blog_content: "",
        blog_keywords: [],
        blog_meta_info: {
            meta_title: "",
            meta_description: "",
            meta_keywords: [],
        },
        categories: [],
        tags: [],
        faq: [],
    });

    // State variables
    const [loading, setLoading] = useState(false);
    const [seoScore, setSeoScore] = useState(0);
    const [seoTips, setSeoTips] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [metaKeywordInput, setMetaKeywordInput] = useState("");
    const [focusKeyword, setFocusKeyword] = useState("");
    const [ads, setAds] = useState([]);
    const [adCode, setAdCode] = useState("");
    const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

    // Message states
    const [message, setMessage] = useState({ type: '', text: '' });
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [isImageUploading, setIsImageUploading] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState(false);

    // Categories management
    const fixedCategories = [
        "Residential moving service", "Furniture delivery","Long-distance move","Local moving service", "Furniture assembly","Large item moving","Packing and unpacking services","Hot tub relocation", "Storage services", "Commarcial moving service"
    ];

    
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectionMode, setSelectionMode] = useState('multiple');
    const [activeTab, setActiveTab] = useState('content');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Show message function
    const showMessage = (text, type = 'success') => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    };

    // Enhanced Jodit Editor configuration with custom upload
    const config = useMemo(() => ({
        readonly: false,
        placeholder: "Start typing your blog content...",
        uploader: {
            insertImageAsBase64URI: false,
            imagesExtensions: ['jpg', 'png', 'jpeg', 'gif', 'webp'],
            url: '/api/upload',
            format: 'json',
            prepareData: function (formData) {
                return formData;
            },
            isSuccess: function (resp) {
                return resp.success;
            },
            getMessage: function (resp) {
                return resp.message || 'Upload failed';
            },
            process: function (resp) {
                return {
                    files: resp.files || [],
                    path: resp.path || '',
                    baseurl: resp.baseurl || '',
                    error: resp.error || false,
                    message: resp.message || ''
                };
            },
            defaultHandlerSuccess: function (resp) {
                if (resp.files && resp.files.length) {
                    this.selection.insertImage(resp.baseurl + resp.files[0]);
                }
            }
        },
        buttons: ['bold', 'italic', 'underline', 'strikethrough', '|', 'ul', 'ol', '|', 
                 'outdent', 'indent', '|', 'font', 'fontsize', 'brush', '|', 'image', 'video', 
                 'table', 'link', '|', 'align', 'undo', 'redo', '|', 'preview', 'fullsize'],
        events: {
            afterSetMode: () => {
                const observer = new MutationObserver(() => {
                    document.querySelectorAll("h1, h2").forEach((heading) => {
                        if (!heading.id) {
                            heading.id = heading.textContent
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^a-z0-9-]/g, "");
                        }
                    });
                });

                const editorContainer = editor.current?.editor;
                if (editorContainer) {
                    observer.observe(editorContainer, {
                        childList: true,
                        subtree: true,
                    });
                }
            },
        },
    }), []);

    // Preload for update
    useEffect(() => {
        if (initialData.blog_title) {
            setForm(initialData);
            setSelectedCategories(initialData.categories || []);
            setFocusKeyword(initialData.search_terms?.[0] || "");
            setAds(initialData.ads || []);
        }
    }, [initialData]);

    // Generate slug from title
    const generateSlug = (title) => {
        return title.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    };

    // Handle title change with auto-slug generation
    useEffect(() => {
        if (!form.blog_title) return;

        const generatedSlug = generateSlug(form.blog_title);
        setForm(prev => ({
            ...prev,
            blog_slug: generatedSlug,
            blog_meta_info: {
                ...prev.blog_meta_info,
                meta_title: form.blog_title.length > 60 
                    ? form.blog_title.substring(0, 60) + "..." 
                    : form.blog_title
            }
        }));
    }, [form.blog_title]);

    // Enhanced SEO Analyzer
    const analyzeSeo = () => {
        const tips = [];
        let score = 0;
        const maxScore = 150;

        const getTextContent = (html) => {
            try {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                return temp.textContent || temp.innerText || '';
            } catch (error) {
                return '';
            }
        };

        const textContent = getTextContent(form.blog_content);
        const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;

        // Content Length Analysis
        if (wordCount > 2000) {
            score += 10;
            tips.push({ type: 'excellent', message: 'Exceptional content length (2000+ words)' });
        } else if (wordCount > 1500) {
            score += 8;
            tips.push({ type: 'good', message: 'Strong content length (1500+ words)' });
        } else if (wordCount > 1000) {
            score += 5;
            tips.push({ type: 'ok', message: 'Adequate content length (1000+ words)' });
        } else {
            tips.push({ type: 'bad', message: 'Content too short (aim for at least 1000 words)' });
        }

        // Title Analysis
        const titleLength = form.blog_title.length;
        if (titleLength >= 50 && titleLength <= 60) {
            score += 5;
            tips.push({ type: 'excellent', message: 'Perfect title length (50-60 chars)' });
        } else if (titleLength > 60 && titleLength <= 80) {
            score += 3;
            tips.push({ type: 'good', message: 'Good title length (60-80 chars)' });
        } else {
            tips.push({
                type: titleLength > 80 ? 'warning' : 'bad',
                message: `Title length ${titleLength} chars (aim for 50-80)`
            });
        }

        // Meta Description Analysis
        const metaDescLength = form.blog_meta_info.meta_description.length;
        if (metaDescLength >= 120 && metaDescLength <= 160) {
            score += 5;
            tips.push({ type: 'excellent', message: 'Perfect meta description length' });
        } else {
            tips.push({
                type: metaDescLength > 0 ? 'ok' : 'bad',
                message: `Meta description length ${metaDescLength} chars (aim for 120-160)`
            });
        }

        // Keyword Analysis
        if (form.blog_keywords.length > 2) {
            score += 20;
            tips.push({ type: 'good', message: `Good number of keywords (${form.blog_keywords.length})` });
        } else {
            tips.push({ type: 'bad', message: 'Add more keywords for better SEO' });
        }

        // Slug Analysis
        if (form.blog_slug) {
            score += 10;
            tips.push({ type: 'good', message: 'Slug is optimized' });
        }

        // Focus Keyword Analysis
        if (focusKeyword) {
            const normalizedKeyword = focusKeyword.toLowerCase();
            if (form.blog_title.toLowerCase().includes(normalizedKeyword)) {
                score += 10;
                tips.push({ type: 'good', message: 'Focus keyword found in title' });
            }
            if (textContent.toLowerCase().includes(normalizedKeyword)) {
                score += 10;
                tips.push({ type: 'good', message: 'Focus keyword found in content' });
            }
        }

        // Image Analysis
        const images = Array.from(form.blog_content.matchAll(/<img[^>]+>/g) || []);
        if (images.length > 0) {
            const imagesWithAlt = images.filter(img => img[0].includes('alt="')).length;
            if (imagesWithAlt === images.length) {
                score += 10;
                tips.push({ type: 'excellent', message: 'All images have alt text' });
            } else {
                tips.push({ type: 'bad', message: `${imagesWithAlt}/${images.length} images have alt text` });
            }
        }

        const normalizedScore = Math.min(Math.round((score / maxScore) * 100), 100);
        setSeoScore(normalizedScore);
        setSeoTips(
            tips.sort((a, b) => {
                const priority = { bad: 1, warning: 2, ok: 3, good: 4, excellent: 5 };
                return priority[b.type] - priority[a.type];
            })
        );
    };

    useEffect(() => {
        analyzeSeo();
    }, [form, focusKeyword]);

    // Form handlers
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleMetaChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            blog_meta_info: { ...prev.blog_meta_info, [name]: value },
        }));
    }

    // Categories management
    const toggleCategory = (category) => {
        let newSelected;
        if (selectionMode === 'single') {
            newSelected = [category];
        } else {
            newSelected = selectedCategories.includes(category)
                ? selectedCategories.filter(c => c !== category)
                : [...selectedCategories, category];
        }

        setSelectedCategories(newSelected);
        setForm(prev => ({ ...prev, categories: newSelected }));
    };

    // Tags management
    const addTags = () => {
        if (tagInput.trim()) {
            const newTags = tagInput.split(',')
                .map(tag => tag.trim())
                .filter(tag => tag.length > 0 && !form.tags.includes(tag));

            if (newTags.length > 0) {
                setForm(prev => ({ ...prev, tags: [...prev.tags, ...newTags] }));
                setTagInput("");
                showMessage('Tags added successfully!');
            }
        }
    };

    const removeTag = (tag) => {
        setForm(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
    };

    // Meta keywords management
    const addMetaKeywords = () => {
        if (metaKeywordInput.trim()) {
            const newKeywords = metaKeywordInput.split(',')
                .map(keyword => keyword.trim())
                .filter(keyword => keyword.length > 0 && !form.blog_meta_info.meta_keywords.includes(keyword));

            if (newKeywords.length > 0) {
                setForm(prev => ({
                    ...prev,
                    blog_meta_info: {
                        ...prev.blog_meta_info,
                        meta_keywords: [...prev.blog_meta_info.meta_keywords, ...newKeywords]
                    }
                }));
                setMetaKeywordInput("");
                showMessage('Meta keywords added successfully!');
            }
        }
    };

    const removeMetaKeyword = (keyword) => {
        setForm(prev => ({
            ...prev,
            blog_meta_info: {
                ...prev.blog_meta_info,
                meta_keywords: prev.blog_meta_info.meta_keywords.filter(k => k !== keyword)
            }
        }));
    };

    // FAQ management
    const addFaq = () => {
        if (newFaq.question.trim() && newFaq.answer.trim()) {
            const newFaqItem = {
                ...newFaq,
                id: `faq_${Date.now()}`
            };
            setForm(prev => ({ ...prev, faq: [...prev.faq, newFaqItem] }));
            setNewFaq({ question: '', answer: '' });
            showMessage('FAQ added successfully!');
        }
    };

    const removeFaq = (id) => {
        setForm(prev => ({ ...prev, faq: prev.faq.filter(faq => faq.id !== id) }));
    };

    // Ads management
    const addAd = () => {
        if (adCode) {
            const newAd = {
                ads_id: `ad_${Date.now()}`,
                ads_code: adCode
            };
            setAds(prev => [...prev, newAd]);
            setAdCode("");
            showMessage('Ad code added successfully!');
        }
    };

    const removeAd = (id) => {
        setAds(prev => prev.filter(ad => ad.ads_id !== id));
    };

    // Custom Image Upload Handler for Jodit
    const handleExternalImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showMessage('Image size should be less than 5MB', 'error');
            return;
        }

        setIsImageUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            
            if (response.data.url) {
                setUploadedImageUrl(response.data.url);
                showMessage('Image uploaded successfully!');
            }
        } catch (error) {
            showMessage('Failed to upload image', 'error');
        } finally {
            setIsImageUploading(false);
        }
    };

    const copyImageUrl = async () => {
        try {
            await navigator.clipboard.writeText(uploadedImageUrl);
            setCopiedUrl(true);
            showMessage('Image URL copied to clipboard!');
            setTimeout(() => setCopiedUrl(false), 2000);
        } catch (error) {
            showMessage('Failed to copy URL', 'error');
        }
    };

    const insertImageToEditor = () => {
        if (uploadedImageUrl && editor.current) {
            editor.current.value = editor.current.value + `<img src="${uploadedImageUrl}" alt="" />`;
            showMessage('Image inserted into editor!');
        }
    };

    // Process content before submission
    const processContentWithHeadingIds = (html) => {
        if (!html) return html;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const headings = tempDiv.querySelectorAll('h1, h2');
        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;
        });

        const images = tempDiv.querySelectorAll('img');
        images.forEach((img) => {
            img.setAttribute('loading', 'lazy');
            if (!img.getAttribute('alt')) {
                img.setAttribute('alt', 'Blog image');
            }
        });

        return tempDiv.innerHTML;
    };

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        
        if (!form.blog_title.trim()) {
            showMessage('Blog title is required', 'error');
            return;
        }

        setLoading(true);

        const processedContent = processContentWithHeadingIds(form.blog_content);

        const blogData = {
            ...form,
            blog_content: processedContent,
            search_terms: focusKeyword ? [focusKeyword] : [],
            seo_score: seoScore,
            ads: ads,
            published_at: new Date()
        };

        try {
            await onSubmit(blogData);
            showMessage('Blog saved successfully!');
            
            // Reset form on new creation
            if (!initialData.blog_title) {
                setForm({
                    blog_title: "",
                    blog_slug: "",
                    blog_banner: "",
                    blog_content: "",
                    blog_keywords: [],
                    blog_meta_info: { meta_title: "", meta_description: "", meta_keywords: [] },
                    categories: [],
                    tags: [],
                    faq: [],
                });
                setAds([]);
                setSelectedCategories([]);
                setFocusKeyword("");
                setUploadedImageUrl("");
            }
            
        } catch (error) {
            showMessage(error.response?.data?.error || 'Failed to save blog', 'error');
        } finally {
            setLoading(false);
        }
    }

    // Tab navigation
    const tabs = [
        { id: 'content', label: 'Content', icon: FaList },
        { id: 'seo', label: 'SEO', icon: FaSearch },
        { id: 'media', label: 'Media', icon: MdImage },
        { id: 'settings', label: 'Settings', icon: FaTag },
    ];

    return (
        <div className="min-h-screen">
            {/* Message Display */}
            {message.text && (
                <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm sm:max-w-md ${
                    message.type === 'error' 
                        ? 'bg-red-50 border border-red-200 text-red-800' 
                        : 'bg-green-50 border border-green-200 text-green-800'
                }`}>
                    <div className="flex items-center gap-3">
                        {message.type === 'error' ? (
                            <MdError className="text-red-500 text-xl flex-shrink-0" />
                        ) : (
                            <MdCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                        )}
                        <span className="flex-1 text-sm sm:text-base">{message.text}</span>
                        <button 
                            onClick={() => setMessage({ type: '', text: '' })}
                            className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="px-4 sm:px-6 py-6 sm:py-8 text-center">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {initialData.blog_title ? 'Edit Blog Post' : 'Create New Blog Post'}
                        </h1>
                        <p className="mt-2 text-sm sm:text-base text-gray-600">
                            Create and optimize your blog content with advanced SEO tools
                        </p>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden border-b border-gray-200 !ml-5">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 !mb-3"
                        >
                            {mobileMenuOpen ? <MdClose className="text-lg" /> : <MdMenu className="text-lg" />}
                            <span>Menu</span>
                        </button>
                    </div>

                    {/* Navigation Tabs */}
                    <div className={`border-b border-gray-200 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <nav className="flex flex-col lg:flex-row lg:space-x-8 !px-4 lg:px-6">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`py-3 lg:py-4 px-1 border-b-2 lg:border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                                            activeTab === tab.id
                                                ? 'border--[var(--accent-color)] text-[var(--accent-color)]'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        <IconComponent className="text-lg" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
                        {/* Content Tab */}
                        {activeTab === 'content' && (
                            <div className="space-y-6">
                                {/* Title and Slug */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Blog Title*
                                        </label>
                                        <input
                                            type="text"
                                            name="blog_title"
                                            value={form.blog_title}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-sm sm:text-base"
                                            placeholder="Enter an engaging blog title"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            URL Slug
                                        </label>
                                        <div className="flex items-center">
                                            <span className="bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg border border-r-0 border-gray-300 text-gray-600 text-sm sm:text-base">
                                                /blog/
                                            </span>
                                            <input
                                                type="text"
                                                name="blog_slug"
                                                value={form.blog_slug}
                                                onChange={handleChange}
                                                className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-sm sm:text-base"
                                                placeholder="url-slug"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Banner Image */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Banner Image
                                    </label>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const formData = new FormData();
                                                    formData.append("file", file);
                                                    try {
                                                        const response = await axios.post('/api/upload', formData);
                                                        if (response.data.url) {
                                                            setForm(prev => ({ ...prev, blog_banner: response.data.url}));
                                                            showMessage('Banner image uploaded successfully!');
                                                        }
                                                    } catch (error) {
                                                        showMessage('Failed to upload banner image', 'error');
                                                    }
                                                }
                                            }}
                                            className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                                        />
                                    </div>

                                    {form.blog_banner && (
                                        <div className="mt-3">
                                            <img 
                                                src={form.blog_banner} 
                                                alt="Banner Preview" 
                                                className="max-h-32 sm:max-h-48 rounded-lg shadow-sm w-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Content Editor with Image Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Blog Content
                                    </label>
                                    
                                    {/* Image Upload Section */}
                                    <div className="mb-4 p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-medium text-gray-700 text-sm sm:text-base">Image Upload</span>
                                            <MdImage className="text-gray-500" />
                                        </div>
                                        <div className="space-y-3">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleExternalImageUpload}
                                                disabled={isImageUploading}
                                                className="w-full p-2 border border-gray-300 rounded text-sm"
                                            />
                                            {isImageUploading && (
                                                <div className="text-[var(--accent-color)] text-sm">Uploading image...</div>
                                            )}
                                            {uploadedImageUrl && (
                                                <div className="space-y-2">
                                                    <div className="flex flex-col sm:flex-row gap-2">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={uploadedImageUrl}
                                                            className="flex-1 p-2 border border-gray-300 rounded text-sm bg-white break-all"
                                                        />
                                                        <div className="flex gap-2">
                                                            <button
                                                                type="button"
                                                                onClick={copyImageUrl}
                                                                className="px-3 sm:px-4 py-2 bg-[var(--accent-color)] text-white rounded hover:bg-[var(--accent-color)] flex items-center gap-2 text-sm"
                                                            >
                                                                {copiedUrl ? <MdCheckCircle /> : <MdCopyAll />}
                                                                {copiedUrl ? 'Copied!' : 'Copy'}
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={insertImageToEditor}
                                                                className="px-3 sm:px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm whitespace-nowrap"
                                                            >
                                                                Insert
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                                        <MdImage className="text-lg" />
                                                        <span>Image ready to be inserted into content</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="min-h-[300px]">
                                        <JoditEditor
                                            ref={editor}
                                            value={form.blog_content}
                                            config={config}
                                            onBlur={(newContent) => setForm(prev => ({ ...prev, blog_content: newContent }))}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SEO Tab */}
                        {activeTab === 'seo' && (
                            <div className="space-y-6">
                                {/* SEO Score Card */}
                                <div className="bg-gradient-to-br p-4 sm:p-6 rounded-xl border border-blue-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-3">
                                            <SiGoogleanalytics className="text-xl sm:text-2xl text-[var(--accent-color)]" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">SEO Score</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">Based on content analysis</p>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                            seoScore > 75 ? 'bg-green-100 text-green-800' :
                                            seoScore > 50 ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {seoScore > 75 ? 'Excellent' : seoScore > 50 ? 'Good' : 'Needs Work'}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <span className="font-medium text-gray-700 text-sm sm:text-base">Overall Score: {seoScore}/100</span>
                                            <span className="text-xs sm:text-sm text-gray-500">{seoTips.length} recommendations</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                                            <div 
                                                className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                                                    seoScore > 75 ? 'bg-green-500' :
                                                    seoScore > 50 ? 'bg-yellow-500' :
                                                    'bg-red-500'
                                                }`}
                                                style={{ width: `${seoScore}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* SEO Tips */}
                                    <div className="mt-4 space-y-2">
                                        {seoTips.slice(0, 6).map((tip, index) => (
                                            <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${
                                                tip.type === 'excellent' ? 'border-green-500 bg-green-50' :
                                                tip.type === 'good' ? 'border-blue-500 bg-blue-50' :
                                                tip.type === 'ok' ? 'border-yellow-500 bg-yellow-50' :
                                                'border-red-500 bg-red-50'
                                            }`}>
                                                <p className="text-xs sm:text-sm font-medium">{tip.message}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SEO Settings */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Focus Keyword
                                        </label>
                                        <input
                                            type="text"
                                            value={focusKeyword}
                                            onChange={(e) => setFocusKeyword(e.target.value)}
                                            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm sm:text-base"
                                            placeholder="Primary keyword for SEO"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Meta Title
                                        </label>
                                        <input
                                            type="text"
                                            name="meta_title"
                                            value={form.blog_meta_info.meta_title}
                                            onChange={handleMetaChange}
                                            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm sm:text-base"
                                            placeholder="Title for search engines"
                                        />
                                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                                            <span>Recommended: 50-60 characters</span>
                                            <span>{form.blog_meta_info.meta_title.length}/60</span>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Meta Description
                                        </label>
                                        <textarea
                                            name="meta_description"
                                            value={form.blog_meta_info.meta_description}
                                            onChange={handleMetaChange}
                                            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] h-24 text-sm sm:text-base"
                                            placeholder="Description for search results"
                                        />
                                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                                            <span>Recommended: 120-160 characters</span>
                                            <span>{form.blog_meta_info.meta_description.length}/160</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta Keywords */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Meta Keywords
                                    </label>
                                    <div className="flex flex-col sm:flex-row gap-2 mb-3">
                                        <input
                                            type="text"
                                            value={metaKeywordInput}
                                            onChange={(e) => setMetaKeywordInput(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    addMetaKeywords();
                                                }
                                            }}
                                            className="flex-1 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm sm:text-base"
                                            placeholder="Add keywords (press Enter to add)"
                                        />
                                        <button
                                            type="button"
                                            onClick={addMetaKeywords}
                                            className="px-4 sm:px-6 bg-[var(--accent-color)] text-white rounded-lg hover:bg-[var(--accent-color)] flex items-center gap-2 justify-center py-2 sm:py-3 text-sm sm:text-base"
                                        >
                                            <FaPlus />
                                            Add
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {form.blog_meta_info.meta_keywords.map((keyword, index) => (
                                            <span key={index} className="bg-blue-100 text-[var(--accent-color)] px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                                {keyword}
                                                <button 
                                                    type="button"
                                                    onClick={() => removeMetaKeyword(keyword)}
                                                    className="text-[var(--accent-color)] hover:text-[var(--accent-color)]"
                                                >
                                                    <FaMinus className="text-xs" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Media Tab */}
                        {activeTab === 'media' && (
                            <div className="space-y-6">
                                {/* Ads Management */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                                    <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                        <MdAdsClick className="text-[var(--accent-color)]" />
                                        Ad Management
                                    </h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        {ads.map(ad => (
                                            <div key={ad.ads_id} className="border border-gray-200 rounded-lg p-3 sm:p-4 relative bg-gray-50">
                                                <button 
                                                    type="button"
                                                    onClick={() => removeAd(ad.ads_id)}
                                                    className="absolute top-2 sm:top-3 right-2 sm:right-3 text-red-500 hover:text-red-700 p-1"
                                                >
                                                    <FaMinus />
                                                </button>
                                                <div className="bg-white p-2 sm:p-3 rounded border">
                                                    <code className="text-xs break-all">{ad.ads_code}</code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Add New Ad Code
                                        </label>
                                        <textarea
                                            value={adCode}
                                            onChange={(e) => setAdCode(e.target.value)}
                                            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg h-24 sm:h-32 font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                                            placeholder="Paste your ad code here..."
                                        />
                                        <button
                                            type="button"
                                            onClick={addAd}
                                            className="mt-3 bg-[var(--accent-color)] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[var(--accent-color)] flex items-center gap-2 justify-center text-sm sm:text-base"
                                        >
                                            <FaPlus />
                                            Add Ad Code
                                        </button>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                                    <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                        <FaQuestionCircle className="text-green-600" />
                                        Frequently Asked Questions
                                    </h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        {form.faq.map((faq) => (
                                            <div key={faq.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 relative bg-white">
                                                <button 
                                                    type="button"
                                                    onClick={() => removeFaq(faq.id)}
                                                    className="absolute top-2 sm:top-3 right-2 sm:right-3 text-red-500 hover:text-red-700 p-1"
                                                >
                                                    <FaMinus />
                                                </button>
                                                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{faq.question}</h4>
                                                <p className="text-gray-600 text-xs sm:text-sm">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border border-dashed border-gray-300 rounded-lg p-3 sm:p-4">
                                        <h4 className="font-medium text-gray-700 mb-3 text-sm sm:text-base">Add New FAQ</h4>
                                        <div className="space-y-3">
                                            <input
                                                type="text"
                                                value={newFaq.question}
                                                onChange={(e) => setNewFaq(prev => ({ ...prev, question: e.target.value }))}
                                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm"
                                                placeholder="Enter question"
                                            />
                                            <textarea
                                                value={newFaq.answer}
                                                onChange={(e) => setNewFaq(prev => ({ ...prev, answer: e.target.value }))}
                                                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm"
                                                placeholder="Enter answer"
                                                rows={3}
                                            />

                                            <button
                                                type="button"
                                                onClick={addFaq}
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2 justify-center text-sm"
                                            >
                                                <FaPlus /> Add FAQ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === 'settings' && (
                            <div className="space-y-6">
                                {/* Categories Selection */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                                    <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                        <FaList className="text-purple-600" />
                                        Categories
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {fixedCategories.map((category) => (
                                            <button
                                                key={category}
                                                type="button"
                                                onClick={() => toggleCategory(category)}
                                                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition ${
                                                    selectedCategories.includes(category)
                                                        ? 'bg-purple-600 text-white border-purple-600'
                                                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-50'
                                                }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags Management */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                                    <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                                        <FaTag className="text-pink-600" />
                                        Tags
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-2 mb-3">
                                        <input
                                            type="text"
                                            value={tagInput}
                                            onChange={(e) => setTagInput(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    addTags();
                                                }
                                            }}
                                            className="flex-1 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
                                            placeholder="Add tags (comma separated)"
                                        />
                                        <button
                                            type="button"
                                            onClick={addTags}
                                            className="px-4 sm:px-6 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center gap-2 justify-center py-2 sm:py-3 text-sm sm:text-base"
                                        >
                                            <FaPlus /> Add
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {form.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                                            >
                                                {tag}
                                                <button
                                                    type="button"
                                                    onClick={() => removeTag(tag)}
                                                    className="text-pink-800 hover:text-pink-600"
                                                >
                                                    <FaMinus className="text-xs" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base ${
                                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--accent-color)] hover:bg-[var(--accent-color)]'
                                }`}
                            >
                                {loading ? 'Saving...' : initialData.blog_title ? 'Update Blog' : 'Create Blog'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogForm;