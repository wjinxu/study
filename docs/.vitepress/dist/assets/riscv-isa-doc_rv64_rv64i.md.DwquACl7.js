import{_ as d,c as r,o as a,ae as e}from"./chunks/framework.BQcVUm0h.js";const c=JSON.parse('{"title":"rv64m","description":"","frontmatter":{"title":"rv64m","editLink":true,"layout":"doc"},"headers":[],"relativePath":"riscv-isa-doc/rv64/rv64i.md","filePath":"riscv-isa-doc/rv64/rv64i.md"}'),h={name:"riscv-isa-doc/rv64/rv64i.md"};function _(i,t,l,s,o,u){return a(),r("div",null,t[0]||(t[0]=[e('<hr><h1 id="u-type" tabindex="-1">U_TYPE <a class="header-anchor" href="#u-type" aria-label="Permalink to &quot;U_TYPE&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>lui</td><td>u_lui</td><td>无</td><td>无</td><td>0110111</td><td></td></tr><tr><td>auipc</td><td>u_auipc</td><td>无</td><td>无</td><td>0010111</td><td></td></tr></tbody></table><h1 id="r-type" tabindex="-1">R_TYPE <a class="header-anchor" href="#r-type" aria-label="Permalink to &quot;R_TYPE&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>add</td><td>r_alu_reg</td><td>0000000</td><td>000</td><td>0110011</td><td></td></tr><tr><td>sub</td><td>r_alu_reg</td><td>0100000</td><td>000</td><td>0110011</td><td></td></tr><tr><td>sll</td><td>r_alu_reg</td><td>0000000</td><td>001</td><td>0110011</td><td></td></tr><tr><td>slt</td><td>r_alu_reg</td><td>0000000</td><td>010</td><td>0110011</td><td></td></tr><tr><td>sltu</td><td>r_alu_reg</td><td>0000000</td><td>011</td><td>0110011</td><td></td></tr><tr><td>xor</td><td>r_alu_reg</td><td>0000000</td><td>100</td><td>0110011</td><td></td></tr><tr><td>srl</td><td>r_alu_reg</td><td>0000000</td><td>101</td><td>0110011</td><td></td></tr><tr><td>sra</td><td>r_alu_reg</td><td>0100000</td><td>101</td><td>0110011</td><td></td></tr><tr><td>or</td><td>r_alu_reg</td><td>0000000</td><td>110</td><td>0110011</td><td></td></tr><tr><td>and</td><td>r_alu_reg</td><td>0000000</td><td>111</td><td>0110011</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>addw</td><td>r_alu_reg_w</td><td>0000000</td><td>000</td><td>0111011</td><td></td></tr><tr><td>subw</td><td>r_alu_reg_w</td><td>0100000</td><td>000</td><td>0111011</td><td></td></tr><tr><td>sllw</td><td>r_alu_reg_w</td><td>0000000</td><td>001</td><td>0111011</td><td></td></tr><tr><td>srlw</td><td>r_alu_reg_w</td><td>0000000</td><td>101</td><td>0111011</td><td></td></tr><tr><td>sraw</td><td>r_alu_reg_w</td><td>0100000</td><td>101</td><td>0111011</td><td></td></tr></tbody></table><h1 id="j-type" tabindex="-1">J_TYPE <a class="header-anchor" href="#j-type" aria-label="Permalink to &quot;J_TYPE&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>jal</td><td>j_jal</td><td>无</td><td>无</td><td>1101111</td><td></td></tr></tbody></table><h1 id="s-type" tabindex="-1">S_type <a class="header-anchor" href="#s-type" aria-label="Permalink to &quot;S_type&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>sb</td><td>s_store</td><td>无</td><td>000</td><td>0100011</td><td></td></tr><tr><td>sh</td><td>s_store</td><td>无</td><td>001</td><td>0100011</td><td></td></tr><tr><td>sw</td><td>s_store</td><td>无</td><td>010</td><td>0100011</td><td></td></tr><tr><td>sd</td><td>s_store</td><td>无</td><td>011</td><td>0100011</td><td></td></tr></tbody></table><h1 id="b-type" tabindex="-1">B_type <a class="header-anchor" href="#b-type" aria-label="Permalink to &quot;B_type&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>beq</td><td>b_branch</td><td>无</td><td>000</td><td>1100011</td><td></td></tr><tr><td>bne</td><td>b_branch</td><td>无</td><td>001</td><td>1100011</td><td></td></tr><tr><td>blt</td><td>b_branch</td><td>无</td><td>100</td><td>1100011</td><td></td></tr><tr><td>bge</td><td>b_branch</td><td>无</td><td>101</td><td>1100011</td><td></td></tr><tr><td>bltu</td><td>b_branch</td><td>无</td><td>110</td><td>1100011</td><td></td></tr><tr><td>bgeu</td><td>b_branch</td><td>无</td><td>111</td><td>1100011</td><td></td></tr></tbody></table><h1 id="i-type" tabindex="-1">I_type <a class="header-anchor" href="#i-type" aria-label="Permalink to &quot;I_type&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>jalr</td><td>i_jalr</td><td>无</td><td>000</td><td>1100111</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>lb</td><td>i_load</td><td>无</td><td>000</td><td>0000011</td><td></td></tr><tr><td>lh</td><td>i_load</td><td>无</td><td>001</td><td>0000011</td><td></td></tr><tr><td>lw</td><td>i_load</td><td>无</td><td>010</td><td>0000011</td><td></td></tr><tr><td>ld</td><td>i_load</td><td>无</td><td>011</td><td>0000011</td><td></td></tr><tr><td>lbu</td><td>i_load</td><td>无</td><td>100</td><td>0000011</td><td></td></tr><tr><td>lhu</td><td>i_load</td><td>无</td><td>101</td><td>0000011</td><td></td></tr><tr><td>lwu</td><td>i_load</td><td>无</td><td>110</td><td>0000011</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>addi</td><td>i_alu_imm</td><td>无</td><td>000</td><td>0010011</td><td></td></tr><tr><td>slti</td><td>i_alu_imm</td><td>无</td><td>010</td><td>0010011</td><td></td></tr><tr><td>sltiu</td><td>i_alu_imm</td><td>无</td><td>011</td><td>0010011</td><td></td></tr><tr><td>xori</td><td>i_alu_imm</td><td>无</td><td>100</td><td>0010011</td><td></td></tr><tr><td>ori</td><td>i_alu_imm</td><td>无</td><td>110</td><td>0010011</td><td></td></tr><tr><td>andi</td><td>i_alu_imm</td><td>无</td><td>111</td><td>0010011</td><td></td></tr><tr><td>slli</td><td>i_alu_imm</td><td>000000</td><td>001</td><td>0010011</td><td></td></tr><tr><td>srli</td><td>i_alu_imm</td><td>000000</td><td>101</td><td>0010011</td><td></td></tr><tr><td>srai</td><td>i_alu_imm</td><td>010000</td><td>101</td><td>0010011</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>addiw</td><td>i_alu_imm_w</td><td>无</td><td>000</td><td>0011011</td><td></td></tr><tr><td>slliw</td><td>i_alu_imm_w</td><td>0000000</td><td>001</td><td>0011011</td><td></td></tr><tr><td>srliw</td><td>i_alu_imm_w</td><td>0000000</td><td>101</td><td>0011011</td><td></td></tr><tr><td>sraiw</td><td>i_alu_imm_w</td><td>0100000</td><td>101</td><td>0011011</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>csrrw</td><td>i_system</td><td>无</td><td>001</td><td>1110011</td><td></td></tr><tr><td>csrrs</td><td>i_system</td><td>无</td><td>010</td><td>1110011</td><td></td></tr><tr><td>csrrc</td><td>i_system</td><td>无</td><td>011</td><td>1110011</td><td></td></tr><tr><td>csrrwi</td><td>i_system</td><td>无</td><td>101</td><td>1110011</td><td></td></tr><tr><td>csrrsi</td><td>i_system</td><td>无</td><td>110</td><td>1110011</td><td></td></tr><tr><td>csrrci</td><td>i_system</td><td>无</td><td>111</td><td>1110011</td><td></td></tr><tr><td>ecall</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>ebreak</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>uret</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>sret</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>mret</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>wfi</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr><tr><td>sfence.vma</td><td>i_system</td><td></td><td>000</td><td>1110011</td><td>这个指令信息写的不全</td></tr></tbody></table><h1 id="暂未分类别的指令" tabindex="-1">暂未分类别的指令 <a class="header-anchor" href="#暂未分类别的指令" aria-label="Permalink to &quot;暂未分类别的指令&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th>用户自定义类型</th><th>func7</th><th>func3</th><th>opcode</th><th>指令效果</th></tr></thead><tbody><tr><td>fence</td><td></td><td></td><td>000</td><td>0001111</td><td>这个指令信息写的不全</td></tr><tr><td>fence.i</td><td></td><td></td><td>001</td><td>0001111</td><td>这个指令信息写的不全</td></tr></tbody></table>',15)]))}const n=d(h,[["render",_]]);export{c as __pageData,n as default};
